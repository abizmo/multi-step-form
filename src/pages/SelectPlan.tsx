import React, { useState } from 'react';

import Paragraph from '../components/Paragraph';
import Plan, { type Billing } from '../components/Plan';
import Title from '../components/Title';
import Switch from '../components/Switch';
import Footer from '../layout/Footer';
import PLANS from '../assets/plans';

function SelectPlan() {
  const [billing, setBilling] = useState<Billing>('monthly');
  const [plan, setPlan] = useState('');

  const handleSwitch = () =>
    setBilling((prev) => (prev === 'monthly' ? 'yearly' : 'monthly'));

  return (
    <div className='grid gap-5'>
      <div>
        <div>
          <Title>Select your plan</Title>
          <Paragraph>
            You have the option of monthly or yearly billing.
          </Paragraph>
        </div>
        <Footer next='/add-ons' back />
      </div>
      <ul className='flex flex-col gap-3 lg:flex-row lg:gap-5'>
        {PLANS.map(({ id, title, price, srcIcon, discount }) => (
          <li className='flex-1' key={id}>
            <Plan
              title={title}
              price={price[billing]}
              billing={billing}
              srcIcon={srcIcon}
              discount={discount[billing]}
              name='plan'
              value={id}
              checked={plan === id}
              onChange={() => setPlan(id)}
            />
          </li>
        ))}
      </ul>
      <Switch
        labelOff='Monthly'
        labelOn='Yearly'
        switchId='billing'
        isOn={billing === 'yearly'}
        onChange={handleSwitch}
      />
    </div>
  );
}

export default SelectPlan;
