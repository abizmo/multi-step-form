import React, { PropsWithChildren } from 'react';

function Body({ children }: PropsWithChildren) {
  return (
    <main className='px-4 lg:px-0 lg:static lg:flex-1'>
      <div className='bg-white px-6 py-8 -mt-[4.25rem] rounded-xl lg:mt-0 lg:px-21 lg:py-10'>
        {children}
      </div>
    </main>
  );
}

export default Body;
