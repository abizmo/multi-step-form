import React from 'react';
import { Link } from 'react-router-dom';

import Paragraph from '../components/Paragraph';
import Title from '../components/Title';
import { useAddon, usePlan } from '../context';
import Footer from '../layout/Footer';

const BILLING = {
  monthly: 'mo',
  yearly: 'yr',
};

function Summary() {
  const { state: plan } = usePlan();
  const { state: addons } = useAddon();

  const total = addons.reduce((prev, next) => prev + next.price, plan.price);

  return (
    <div className='grid gap-5 lg:gap-9'>
      <div>
        <Title>Finishing up</Title>
        <Paragraph>
          Double-check everything looks OK before confirming.
        </Paragraph>
      </div>
      <div className='bg-alabaster px-4 py-5 lg:px-6 text-sm'>
        <div className='flex justify-between items-center pb-4 lg:pb-6 border-b border-light-gray mb-4 lg:mb-6'>
          <div>
            <p className='lg:text-base font-medium text-marine-blue mb-1 lg:mb-2'>
              {plan.title} <span className='capitalize'>({plan.billing})</span>
            </p>
            <Link
              className='text-cool-gray hover:text-purplish-blue underline'
              to='/select-plan'
            >
              Change
            </Link>
          </div>
          <span className='lg:text-base font-medium text-marine-blue text-right'>
            ${plan.price}/{BILLING[plan.billing]}
          </span>
        </div>
        <ul>
          {addons.map((addon) => (
            <li
              key={addon.id}
              className='[&:not(:last-child)]:mb-5 [&:not(:last-child)]:lg:mb-6 flex justify-between'
            >
              <span className='text-cool-gray'>{addon.title}</span>
              <span className='text-marine-blue'>
                +${addon.price}/{BILLING[plan.billing]}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className='px-4 lg:px-6 flex justify-between items-center'>
        <span className='text-sm text-cool-gray'>
          Total (per {plan.billing.slice(0, -2)})
        </span>
        <span className='lg:text-lg font-medium text-purplish-blue'>
          +${total}/{BILLING[plan.billing]}
        </span>
      </div>
      <Footer next='/thank-you' confirm back />
    </div>
  );
}

export default Summary;
