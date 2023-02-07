import React, { PropsWithChildren } from 'react';

function Paragraph({ children }: PropsWithChildren): JSX.Element {
  return <p className='text-base leading-normal text-cool-gray'>{children}</p>;
}

export default Paragraph;
