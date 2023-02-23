import { DiscountByBilling, PriceByBilling } from './billing';

export type PlanType = {
  id: string;
  title: string;
  price: PriceByBilling;
  srcIcon: string;
  discount: DiscountByBilling;
};
