import React from 'react';

interface Props {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (evt: React.FormEvent<HTMLInputElement>) => void;
}

function FormGroup({ id, label, type, placeholder, value, onChange }: Props) {
  return (
    <div className='grid gap-1 w-full'>
      <label className='text-marine-blue text-xs' htmlFor={id}>
        {label}
      </label>
      <input
        className='h-10 px-4 text-m  text-marine-blue font-medium border-2 border-light-gray rounded outline-transparent focus:border-purplish-blue placeholder:text-cool-gray'
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default FormGroup;
