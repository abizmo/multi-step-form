/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentProps } from 'react';

export type Billing = 'monthly' | 'yearly';
type InputProps = ComponentProps<'input'>;

interface Props extends Omit<InputProps, 'type' | 'className'> {
  srcIcon: string;
  title: string;
  price?: number;
  billing?: Billing;
  discount?: string | undefined;
}

const BILLING = {
  monthly: 'mo',
  yearly: 'yr',
};

function Plan({
  id,
  checked,
  srcIcon,
  title,
  price = 0,
  billing = 'monthly',
  discount = undefined,
  ...props
}: Props) {
  return (
    <label
      htmlFor={id}
      className={`flex lg:flex-col gap-4 lg:gap-11 p-4 lg:py-5 border border-light-gray rounded ${
        checked ? 'bg-magnolia border-purplish-blue' : ''
      }`}
    >
      <div>
        <input
          id={id}
          type='radio'
          className='sr-only'
          checked={checked}
          {...props}
        />
        <img src={srcIcon} alt='' />
      </div>
      <div className='flex-1'>
        <p className='text-marine-blue text-base font-medium mb-2'>{title}</p>
        <p className='text-cool-gray text-sm'>
          ${price}/{BILLING[billing]}
        </p>
        {discount && (
          <p className='text-marine-blue text-xs mt-3'>{discount}</p>
        )}
      </div>
    </label>
  );
}

export default Plan;
