"use client";
import { signIn, useSession } from "next-auth/react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation"; 

export function AnimatedHero() {
  const { data: session, status } = useSession();
  const router = useRouter(); 

  const words = [
    { text: "Investing" },
    { text: "Gen Z" },
    { text: "with" },
    { text: "InfluenceX.", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="flex flex-col items-center mt-9 h-[40rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-base mb-10">
        A YouTubers Trading Platform
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        {!session?.user ? (
          <Button
            onClick={() => signIn()} // Call signIn as a function
            className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
          >
            Join now
          </Button>
        ) : (
          <Button
            onClick={() => router.push("/dashboard")}
            className="bg-blue-400"
          >
            Go to Dashboard
          </Button>
        )}
      </div>
    </div>
  );
}
