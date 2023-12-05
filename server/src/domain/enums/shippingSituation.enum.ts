export const ShippingSituationEnum = {
  created: 'created',
  accepted: 'accepted',
  shipping: 'shipping',
  delivered: 'delivered',
} as const;

export type ShippingSituationEnum = typeof ShippingSituationEnum;
