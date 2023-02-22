import { PriceByBilling } from './billing';

export type AddonType = {
  id: string;
  title: string;
  description: string;
  price: PriceByBilling;
};
