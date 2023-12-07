import { ShippingEntity } from '../entities/shipping.entity';
import { UnexpectedException } from '../exceptions/unexpected.exception';

export const calculateDeliveryPrice = (shipping: ShippingEntity) => {
  const distanceInKm = shipping.distanceInMeters / 1000;
  const productWeight = shipping.product.weight;
  const vehicleTypeWeight = shipping.vehicleType.weight;

  if (distanceInKm < 0)
    throw new UnexpectedException(
      [
        {
          message: 'distancia do frete inválida',
        },
      ],
      'Calculate Delivery Price Util',
    );

  let tax = 0.05;
  if (distanceInKm > 100 && distanceInKm <= 200) tax = 0.07;
  else if (distanceInKm > 200 && distanceInKm <= 500) tax = 0.09;
  else if (distanceInKm > 500) tax = 0.1;

  const basePrice = distanceInKm * productWeight * vehicleTypeWeight;
  const price = basePrice - basePrice * tax;

  return price;
};
