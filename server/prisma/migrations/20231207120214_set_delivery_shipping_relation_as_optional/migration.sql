-- DropForeignKey
ALTER TABLE "Shipping" DROP CONSTRAINT "Shipping_deliveryId_fkey";

-- AlterTable
ALTER TABLE "Shipping" ALTER COLUMN "deliveryId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Shipping" ADD CONSTRAINT "Shipping_deliveryId_fkey" FOREIGN KEY ("deliveryId") REFERENCES "Delivery"("id") ON DELETE SET NULL ON UPDATE CASCADE;
