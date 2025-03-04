import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const user = prisma.user.create({
    data: {
      id: 'adasd',
      login: 'user',
      passwordHash: 'adasd',
      rating: 1000,
    }
  })
  const user2 = prisma.user.create({
    data: {
      id: 'adasdsdsd',
      login: 'user2',
      passwordHash: 'adasdsd',
      rating: 600,
    }
  })
  await prisma.game.create({
    data: {
      field: Array(9).fill(null),
      status: 'idle',
      players: {
        connect: {
          id: (await user).id,
        }
      }
    },
  });
  await prisma.game.create({
    data: {
      field: Array(9).fill(null),
      status: 'idle',
      players: {
        connect: {
          id: (await user2).id,
        }
      }
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
