/* eslint-disable @typescript-eslint/no-misused-promises */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1); // Exit with an error code if an exception occurs during the execution of the main() function or any of its asynchronous operations. This is a common practice in Node.js applications to handle unexpected errors and ensure that the application exits gracefully with an error code when something goes wrong.
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
