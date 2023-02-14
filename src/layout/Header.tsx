import React, { PropsWithChildren } from 'react';

function Header({ children }: PropsWithChildren) {
  return (
    <header className='bg-mobile bg-no-repeat bg-cover lg:bg-desktop p-8 lg:py-10 h-44 lg:h-full lg:w-72 rounded-xl'>
      <nav className='w-min mx-auto lg:w-auto' aria-label='Navigation'>
        {children}
      </nav>
    </header>
  );
}

export default Header;
