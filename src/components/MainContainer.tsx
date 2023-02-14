import React, { PropsWithChildren } from 'react';

function MainContainer({ children }: PropsWithChildren) {
  return (
    <div className='container lg:bg-white lg:h-[37.5rem] lg:shadow-lg lg:rounded-2xl lg:self-center lg:flex lg:gap-4 lg:p-4'>
      {children}
    </div>
  );
}

export default MainContainer;
