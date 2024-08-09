import { PrismaClient } from "@prisma/client";

const PrismaClientSingleton = (() => {
  if (process.env.NODE_ENV === "production") {
    return new PrismaClient();
  }

  // In development, use a global variable to ensure a single PrismaClient instance
  // to prevent multiple instances that can cause issues.
  const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
  };

  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
  }

  return globalForPrisma.prisma;
})();

export default PrismaClientSingleton;
