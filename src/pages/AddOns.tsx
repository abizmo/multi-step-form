import React from 'react';
import ADDONS from '../assets/addons';
import AddOn from '../components/AddOn';

import Paragraph from '../components/Paragraph';
import Title from '../components/Title';
import { useAddon, usePlan } from '../context';
import { AddonStateType } from '../context/addOn';
import Footer from '../layout/Footer';

function AddOns() {
  const { state: addOns, addAddon, removeAddon } = useAddon();
  const {
    state: { billing },
  } = usePlan();

  const isAddOnSelected = (addonId: string) =>
    addOns.some((addon) => addon.id === addonId);

  const toggleAddOn = (addon: AddonStateType) =>
    isAddOnSelected(addon.id) ? removeAddon(addon.id) : addAddon(addon);

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
              onChange={() => toggleAddOn({ id, title, price: price[billing] })}
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
