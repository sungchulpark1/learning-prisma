import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create
  const newQuote = await prisma.quote.create({
    data: { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  });
  console.log("Created:", newQuote);

  // Read
  const allQuotes = await prisma.quote.findMany();
  console.log("All quotes:", allQuotes);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
