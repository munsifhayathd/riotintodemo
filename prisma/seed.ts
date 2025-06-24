import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seed...');

  // Reset all tables to ensure clean state
  await prisma.user.deleteMany();

  console.log('Seeding users...');
  const users = [
    {
      email: 'admin@example.com',
      first_name: 'John',
      last_name: 'Smith',
      password: await hash('test1234', 10),
      role: 'ADMIN',
      is_active: true,
    },
    {
      email: 'manager@example.com',
      first_name: 'Sarah',
      last_name: 'Johnson',
      password: 'test1234',
      role: 'MANAGER',
      is_active: true,
    },
    {
      email: 'user@example.com',
      first_name: 'Michael',
      last_name: 'Brown',
      password: 'test1234',
      role: 'USER',
      is_active: true,
    },
    {
      email: 'david@example.com',
      first_name: 'David',
      last_name: 'Wilson',
      password: 'test1234',
      role: 'MANAGER',
      is_active: true,
    },
    {
      email: 'emma@example.com',
      first_name: 'Emma',
      last_name: 'Taylor',
      password: 'test1234',
      role: 'USER',
      is_active: true,
    },
    {
      email: 'james@example.com',
      first_name: 'James',
      last_name: 'Anderson',
      password: 'test1234',
      role: 'MANAGER',
      is_active: true,
    },
    {
      email: 'olivia@example.com',
      first_name: 'Olivia',
      last_name: 'Martinez',
      password: 'test1234',
      role: 'USER',
      is_active: true,
    },
    {
      email: 'william@example.com',
      first_name: 'William',
      last_name: 'Garcia',
      password: 'test1234',
      role: 'USER',
      is_active: true,
    },
    {
      email: 'sophia@example.com',
      first_name: 'Sophia',
      last_name: 'Lee',
      password: 'test1234',
      role: 'MANAGER',
      is_active: true,
    },
    {
      email: 'lucas@example.com',
      first_name: 'Lucas',
      last_name: 'Wright',
      password: 'test1234',
      role: 'USER',
      is_active: true,
    },
  ];

  const createdUsers = [];
  for (const user of users) {
    try {
      console.log(`Creating user: ${user.email}`);
      const createdUser = await prisma.user.create({
        data: user
      });
      createdUsers.push(createdUser);
      console.log(`Created user with ID: ${createdUser.id}`);
    } catch (error) {
      console.error(`Failed to create user ${user.email}:`, error);
      throw error;
    }
  }
  console.log('Users seeded successfully.');

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error('Error during database seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Cleaning up...');
    await prisma.$disconnect();
  }); 