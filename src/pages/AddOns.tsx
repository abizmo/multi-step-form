import React, { useState } from 'react';
import AddOn from '../components/AddOn';

import Paragraph from '../components/Paragraph';
import { Billing } from '../components/Plan';
import Title from '../components/Title';
import Footer from '../layout/Footer';

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

function AddOns() {
  const [addOns, setAddOns] = useState<string[]>([]);
  // TODO: come from App state
  const billing = 'monthly';

  const isAddOnSelected = (addOn: string) => addOns.includes(addOn);
  const toggleAddOn = (addOn: string) =>
    isAddOnSelected(addOn)
      ? setAddOns(addOns.filter((a) => a !== addOn))
      : setAddOns([...addOns, addOn]);

  return (
    <div className='grid gap-5 lg:gap-9'>
      <div>
        <Title>Pick add-ons</Title>
        <Paragraph>Add-ons help enhance your gamin experience.</Paragraph>
      </div>
      <ul>
        {ADDONS.map(({ id, title, description, price }) => (
          <li
            key={id}
            className='[&:not(:last-child)]:mb-3 [&:not(:last-child)]:lg:mb-4'
          >
            <AddOn
              id={id}
              title={title}
              description={description}
              price={price[billing]}
              checked={isAddOnSelected(id)}
              onChange={() => toggleAddOn(id)}
              billing={billing}
            />
          </li>
        ))}
      </ul>
      <Footer next='/summary' back />
    </div>
  );
}

export default AddOns;
