import React, { useState } from 'react';

interface Props {
  id: string;
  label: string;
  errorMessage: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (evt: React.FormEvent<HTMLInputElement>) => void;
}

function FormGroup({
  id,
  label,
  errorMessage,
  type,
  placeholder,
  value,
  onChange,
}: Props) {
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
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default FormGroup;
