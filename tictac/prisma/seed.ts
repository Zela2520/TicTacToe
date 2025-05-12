import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Создаем пользователей и сразу ждем их создания
  const user1 = await prisma.user.create({
    data: {
      id: 'user1_id',
      login: 'player1',
      passwordHash: 'hash1',
      rating: 1000,
    }
  });

  const user2 = await prisma.user.create({
    data: {
      id: 'user2_id',
      login: 'player2',
      passwordHash: 'hash2',
      rating: 800,
    }
  });

  // Создаем игру в состоянии idle
  await prisma.game.create({
    data: {
      field: Array(9).fill(null),
      status: 'idle',
      players: {
        connect: [{ id: user1.id }]
      }
    },
  });

  // Создаем игру в процессе
  await prisma.game.create({
    data: {
      field: Array(9).fill(null),
      status: 'inProgress',
      players: {
        connect: [{ id: user1.id }, { id: user2.id }]
      }
    },
  });

  // Создаем завершенную игру с победителем
  await prisma.game.create({
    data: {
      field: ['X', 'O', 'X', 'O', 'X', 'O', 'X', null, null],
      status: 'gameOver',
      players: {
        connect: [{ id: user1.id }, { id: user2.id }]
      },
      winner: {
        connect: { id: user1.id }
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