import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

export const createProducts = async (prisma: PrismaClient) => {
  const [alreadyExistsRefrigerator, alreadyExistsTV] = await Promise.all([
    await prisma.product.findUnique({
      where: {
        name: 'Geladeira',
      },
    }),
    await prisma.product.findUnique({
      where: {
        name: 'TV Plasma',
      },
    }),
  ]);

  if (!alreadyExistsRefrigerator) {
    await prisma.product.create({
      data: {
        id: randomUUID(),
        name: 'Geladeira',
        weight: 2,
      },
    });
  }
  if (!alreadyExistsTV) {
    await prisma.product.create({
      data: {
        id: randomUUID(),
        name: 'TV Plasma',
        weight: 1,
      },
    });
  }
};
