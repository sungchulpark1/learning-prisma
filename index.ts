import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.quote.deleteMany();
  await prisma.user.deleteMany();
  
  // Create a new user
  const newUser = await prisma.user.create({
    data: {
      username: 'test',
      email: 'test@example.com',
      passwordHash: 'hashed_password',
    },
  });

  // Create a quote
  const newQuote = await prisma.quote.create({
    data: {
      text: 'This is a sample quote.',
      author: {
        connect: {
          id: newUser.id,
        },
      },
    },
  });

  console.log('New User:', newUser);
  console.log('New Quote:', newQuote);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
