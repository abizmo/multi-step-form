import React from 'react';
import { useLocation } from 'react-router-dom';

type Step = {
  path: string;
  name: string;
};

export interface StepProps {
  steps: Step[];
}

function Steps({ steps }: StepProps) {
  const location = useLocation();

  return (
    <ul className='flex gap-4 lg:flex-col lg:gap-8'>
      {steps.map(({ path, name }, idx) => (
        <li key={path} className='flex gap-4 items-center'>
          <span
            className={`h-8 w-8 border border-light-gray text-sm lg:text-m lg:font-bold font-medium rounded-full grid place-content-center ${
              location.pathname === path
                ? 'bg-light-blue text-marine-blue border-purplish-blue'
                : 'text-white'
            }`}
          >
            {idx + 1}
          </span>
          <div className='hidden lg:block uppercase '>
            <p className='text-s tracking-tight text-light-gray mb-1'>
              Step {idx + 1}
            </p>
            <p className='text-sm font-bold text-white tracking-wide'>{name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Steps;
