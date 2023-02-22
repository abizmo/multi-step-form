import React, { ComponentProps } from 'react';
import BILLING from '../assets/billing';
import { Billing } from '../types/billing';

type InputProps = ComponentProps<'input'>;

export interface PlanProps extends Omit<InputProps, 'type' | 'className'> {
  srcIcon: string;
  title: string;
  price?: number;
  billing?: Billing;
  discount?: string | undefined;
}

function Plan({
  id,
  checked,
  srcIcon,
  title,
  price = 0,
  billing = 'monthly',
  discount = undefined,
  ...props
}: PlanProps) {
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
