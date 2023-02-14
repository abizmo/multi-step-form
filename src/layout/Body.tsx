import React, { PropsWithChildren } from 'react';

function Body({ children }: PropsWithChildren) {
  return <main className='lg:flex-1 lg:px-21 lg:py-10'>{children}</main>;
}

export default Body;
