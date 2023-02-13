import React from 'react';

type Step = {
  id: number;
  name: string;
};

interface Props {
  steps: Step[];
  currentStep: number;
}

function Steps({ steps, currentStep }: Props) {
  return (
    <ul className='flex gap-4 lg:flex-col lg:gap-8'>
      {steps.map(({ id, name }) => (
        <li key={id} className='flex gap-4 items-center'>
          <span
            className={`h-8 w-8 border border-light-gray text-sm lg:text-m lg:font-bold font-medium rounded-full grid place-content-center ${
              currentStep === id
                ? 'bg-light-blue text-marine-blue border-purplish-blue'
                : 'text-white'
            }`}
          >
            {id}
          </span>
          <div className='hidden lg:block uppercase '>
            <p className='text-s tracking-tight text-light-gray mb-1'>
              Step {id}
            </p>
            <p className='text-sm font-bold text-white tracking-wide'>{name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Steps;
