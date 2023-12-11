import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

export const createVehicles = async (prisma: PrismaClient) => {
  const [alreadyExistsS10, alreadyExistsVWTruck] = await Promise.all([
    await prisma.vehicle.findUnique({
      where: {
        plate: 'ABC1D23',
      },
    }),
    await prisma.vehicle.findUnique({
      where: {
        plate: 'FGH4I56',
      },
    }),
  ]);

  if (!alreadyExistsS10) {
    await prisma.vehicle.create({
      data: {
        id: randomUUID(),
        name: 'Chevrolet S10',
        plate: 'ABC1D23',
        vehicleTypeId: '649141f8-7fd8-4050-93ac-6a5252227529',
      },
    });
  }
  if (!alreadyExistsVWTruck) {
    await prisma.vehicle.create({
      data: {
        id: randomUUID(),
        name: 'Volkswagen Constellation',
        plate: 'FGH4I56',
        vehicleTypeId: 'df605ef9-e954-424a-877d-994a5cef5dde',
      },
    });
  }
};
