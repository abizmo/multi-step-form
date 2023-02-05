import React, { PropsWithChildren } from 'react';

function Title({ children }: PropsWithChildren): JSX.Element {
  return (
    <h1 className='font-bold text-xl lg:text-2xl text-marine-blue'>
      {children}
    </h1>
  );
}

export default Title;
