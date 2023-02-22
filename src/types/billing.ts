export type Billing = 'monthly' | 'yearly';

export type PriceByBilling = {
  [key in Billing]: number;
};

export type DiscountByBilling = {
  [key in Billing]?: string;
};
