import { PrismaClient } from '@prisma/client';
import { createUsers } from './users.seed';
import { createVehicleTypes } from './vehicleTypes.seed';
import { createVehicles } from './vehicles.seed';
import { createProducts } from './products.seed';

const prisma = new PrismaClient();

async function main() {
  await createUsers(prisma);
  await createVehicleTypes(prisma);
  await createVehicles(prisma);
  await createProducts(prisma);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
