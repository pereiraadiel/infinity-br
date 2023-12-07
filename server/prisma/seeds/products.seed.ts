import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

export const createProducts = async (prisma: PrismaClient) => {
  const [alreadyExistsShopman, alreadyExistsDeliveryman] = await Promise.all([
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

  if (!alreadyExistsShopman) {
    await prisma.product.create({
      data: {
        id: randomUUID(),
        name: 'Geladeira',
        weight: 2,
      },
    });
  }
  if (!alreadyExistsDeliveryman) {
    await prisma.product.create({
      data: {
        id: randomUUID(),
        name: 'TV Plasma',
        weight: 1,
      },
    });
  }
};
