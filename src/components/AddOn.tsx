import React from 'react';

type Billing = 'monthly' | 'yearly';

interface Props {
  id: string;
  checked: boolean;
  onChange: () => void;
  title: string;
  description: string;
  price?: number;
  billing?: Billing;
}

const BILLING = {
  monthly: 'mo',
  yearly: 'yr',
};

function AddOn({
  id,
  checked,
  onChange,
  title,
  description,
  price = 0,
  billing = 'monthly',
}: Props) {
  return (
    <label
      htmlFor={id}
      className={`flex gap-4 lg:gap-6 items-center border border-light-gray p-4 lg:px-6 lg:py-5 rounded ${
        checked ? 'bg-magnolia border-purplish-blue' : ''
      }`}
    >
      <div>
        <input
          type='checkbox'
          id={id}
          className='sr-only peer'
          onChange={onChange}
          checked={checked}
        />
        <span className='block h-5 w-5 border border-light-gray rounded peer-checked:bg-purplish-blue peer-checked:border-purplish-blue peer-checked:bg-[url("/images/icon-checkmark.svg")] peer-checked:bg-no-repeat peer-checked:bg-center' />
      </div>
      <div className='flex-1'>
        <p className='text-marine-blue text-s lg:text-base font-medium mb-1 lg:mb-2'>
          {title}
        </p>
        <p className='text-cool-gray text-xs lg:text-s'>{description}</p>
      </div>
      <span className='text-purplish-blue text-xs lg:text-s'>{`+$${price}/${BILLING[billing]}`}</span>
    </label>
  );
}

export default AddOn;
