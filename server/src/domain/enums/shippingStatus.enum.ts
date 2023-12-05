export const ShippingStatusEnum = {
  created: 'created',
  accepted: 'accepted',
} as const;

export type ShippingStatusEnum = typeof ShippingStatusEnum;
