export const ShippingStatusEnum = {
  created: 'created',
  accepted: 'accepted',
} as const;

export type ShippingStatusEnum =
  (typeof ShippingStatusEnum)[keyof typeof ShippingStatusEnum];
