import { Billing } from '../components/Plan';

type Price = {
  [key in Billing]: number;
};

type AddOnType = {
  id: string;
  title: string;
  description: string;
  price: Price;
};

const ADDONS: AddOnType[] = [
  {
    id: 'online-service',
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    id: 'larger-storage',
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    id: 'custom-profile',
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
];

export default ADDONS;
