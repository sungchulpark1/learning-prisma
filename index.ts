import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing users first
  await prisma.user.deleteMany();
  
  // Create a new user
  const newUser = await prisma.user.create({
    data: {
      username: 'test',
      email: 'test@example.com',
      passwordHash: 'hashed_password',
    },
  });

  console.log('New User:', newUser);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
