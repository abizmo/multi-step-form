import React from 'react';

import Paragraph from '../components/Paragraph';
import Plan from '../components/Plan';
import Title from '../components/Title';
import Switch from '../components/Switch';
import Footer from '../layout/Footer';
import PLANS from '../assets/plans';
import { usePlan } from '../context/plan';

function SelectPlan() {
  const { state, changePlan, changeBilling } = usePlan();
  const { billing, ...plan } = state;

  return (
    <div className='grid gap-5 lg:gap-9'>
      <div>
        <div>
          <Title>Select your plan</Title>
          <Paragraph>
            You have the option of monthly or yearly billing.
          </Paragraph>
        </div>
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
              checked={plan.id === id}
              onChange={() => changePlan({ id, title, price: price[billing] })}
            />
          </li>
        ))}
      </ul>
      <Switch
        labelOff='Monthly'
        labelOn='Yearly'
        switchId='billing'
        isOn={billing === 'yearly'}
        onChange={changeBilling}
      />
      <Footer next='/add-ons' back />
    </div>
  );
}

export default SelectPlan;
