import React, { ComponentProps, useState } from 'react';

type InputProps = ComponentProps<'input'>;

export interface FormGroupProps extends InputProps {
  errorMessage: string;
  label: string;
}
function FormGroup({ id, label, errorMessage, ...props }: FormGroupProps) {
  const [isInvalid, setIsInvalid] = useState(false);
  const handleBlur = (evt: React.FormEvent<HTMLInputElement>) => {
    if (evt.currentTarget.value === '') setIsInvalid(true);
    else setIsInvalid(false);
  };

  return (
    <div className='grid gap-1 w-full'>
      <div className='flex justify-between text-xs lg:text-s'>
        <label className='text-marine-blue' htmlFor={id}>
          {label}
        </label>
        {isInvalid ? (
          <span className='font-bold text-strawberry-red'>{errorMessage}</span>
        ) : null}
      </div>
      <input
        className={`h-10 px-4 text-m  text-marine-blue font-medium border-2 border-light-gray rounded outline-transparent focus:border-purplish-blue placeholder:text-cool-gray ${
          isInvalid ? 'border-strawberry-red' : ''
        }`}
        {...props}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default FormGroup;
