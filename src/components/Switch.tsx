import React from 'react';

export interface SwitchProps {
  labelOff: string;
  labelOn: string;
  switchId: string;
  isOn: boolean;
  onChange: () => void;
}

function Switch({
  labelOff,
  labelOn,
  switchId,
  isOn,
  onChange,
}: SwitchProps): JSX.Element {
  return (
    <div className='bg-alabaster flex gap-6 justify-center py-4 rounded-lg text-sm font-medium text-cool-gray'>
      <span className={isOn ? '' : 'text-marine-blue'}>{labelOff}</span>
      <label className='relative inline-block w-10 h-5' htmlFor={switchId}>
        <input
          type='checkbox'
          onChange={onChange}
          checked={isOn}
          className='sr-only peer'
          id={switchId}
        />
        <span className="absolute inset-0 cursor-pointer bg-marine-blue rounded-xl before:content-[''] before:absolute before:w-3 before:h-3 before:bg-alabaster before:rounded-full before:top-1 before:left-1 peer-checked:before:translate-x-5 before:transition-all" />
      </label>
      <span className={isOn ? 'text-marine-blue' : ''}>{labelOn}</span>
    </div>
  );
}

export default Switch;
