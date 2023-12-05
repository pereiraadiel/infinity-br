export const DeliveryStatusEnum = {
  oncourse: 'oncourse',
  delivered: 'delivered',
} as const;

export type DeliveryStatusEnum = typeof DeliveryStatusEnum;
