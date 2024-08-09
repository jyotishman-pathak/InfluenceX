import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import db from "@/app/db";
import { Keypair } from "@solana/web3.js";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        const email = user.email;

        if (!email) {
          return false;
        }

        const userDb = await db.user.findFirst({
          where: {
            username: email,
          },
        });

        if (userDb) {
          return true;
        }

        const keypair = Keypair.generate();
        const publicKey = keypair.publicKey.toBase58();
        const privateKey = keypair.secretKey.toString(); // Ensure secretKey is converted to string

        // Securely handle private key (avoid logging)
        console.log("Public Key:", publicKey);

        await db.user.create({
          data: {
            username: email,
         //@ts-ignore
            name: profile?.name || "Unknown", // Provide default if name is not available
            profilePicture: profile?.image || "defaultProfilePictureUrl", // Use profile picture or default
            provider: "Google",
            solWallet: {
              create: {
                publicKey: publicKey,
                privateKey: privateKey,
              },
            },
            inrWalletId: {
              create: {
                balance: 0,
              },
            },
          },
        });

        return true;
      }

      return false;
    },
  },
});

export { handler as GET, handler as POST };
