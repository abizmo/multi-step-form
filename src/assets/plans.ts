import { Billing } from '../components/Plan';

type Price = {
  [key in Billing]: number;
};

type Discount = {
  [key in Billing]?: string;
};

export type PlanType = {
  id: string;
  title: string;
  price: Price;
  srcIcon: string;
  discount: Discount;
};

const PLANS: PlanType[] = [
  {
    id: 'arcade',
    title: 'Arcade',
    price: {
      monthly: 9,
      yearly: 90,
    },
    srcIcon: '/images/icon-arcade.svg',
    discount: {
      yearly: '2 months free',
    },
  },
  {
    id: 'advanced',
    title: 'Advanced',
    price: {
      monthly: 12,
      yearly: 120,
    },
    srcIcon: '/images/icon-advanced.svg',
    discount: {
      yearly: '2 months free',
    },
  },
  {
    id: 'pro',
    title: 'Pro',
    price: {
      monthly: 15,
      yearly: 150,
    },
    srcIcon: '/images/icon-pro.svg',
    discount: {
      yearly: '2 months free',
    },
  },
];

export default PLANS;
