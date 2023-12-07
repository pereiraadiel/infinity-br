import { PrismaClient } from '@prisma/client';

export const createVehicleTypes = async (prisma: PrismaClient) => {
  const [alreadyExistsShopman, alreadyExistsDeliveryman] = await Promise.all([
    await prisma.vehicleType.findUnique({
      where: {
        name: 'ABC1D23',
      },
    }),
    await prisma.vehicleType.findUnique({
      where: {
        name: 'FGH4I56',
      },
    }),
  ]);

  if (!alreadyExistsShopman) {
    await prisma.vehicleType.create({
      data: {
        id: '649141f8-7fd8-4050-93ac-6a5252227529',
        name: 'Camionete',
        weight: 2.5,
      },
    });
  }
  if (!alreadyExistsDeliveryman) {
    await prisma.vehicleType.create({
      data: {
        id: 'df605ef9-e954-424a-877d-994a5cef5dde',
        name: 'Caminhão',
        weight: 3,
      },
    });
  }
};
