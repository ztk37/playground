import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// See: https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
