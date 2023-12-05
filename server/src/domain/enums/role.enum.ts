export const RoleEnum = {
  Deliveryman: 'deliveryman',
  Shopman: 'shopman',
} as const;

export type RoleEnum = typeof RoleEnum;
