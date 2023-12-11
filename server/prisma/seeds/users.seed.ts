import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

export const createUsers = async (prisma: PrismaClient) => {
  const [alreadyExistsShopman, alreadyExistsDeliveryman] = await Promise.all([
    await prisma.user.findUnique({
      where: {
        email: 'shopman@infinity.br',
      },
    }),
    await prisma.user.findUnique({
      where: {
        email: 'deliveryman@infinity.br',
      },
    }),
  ]);

  if (!alreadyExistsShopman) {
    await prisma.user.create({
      data: {
        id: randomUUID(),
        email: 'shopman@infinity.br',
        name: 'Shopman Infinity Brasil',
        password:
          '$2b$08$61SZ7mAjmJ5OgdHTaSIaAuar5spBm/mZy2fkNferPECuSVQZ5ZsBC', // 12345678
        role: 'shopman',
      },
    });
  }
  if (!alreadyExistsDeliveryman) {
    await prisma.user.create({
      data: {
        id: randomUUID(),
        email: 'deliveryman@infinity.br',
        name: 'Delivery Infinity Brasil',
        password:
          '$2b$08$61SZ7mAjmJ5OgdHTaSIaAuar5spBm/mZy2fkNferPECuSVQZ5ZsBC', // 12345678
        role: 'deliveryman',
      },
    });
  }
};
