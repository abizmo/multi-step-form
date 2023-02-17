import React, { useState } from 'react';
import ADDONS from '../assets/addons';
import AddOn from '../components/AddOn';

import Paragraph from '../components/Paragraph';
import Title from '../components/Title';
import Footer from '../layout/Footer';

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
