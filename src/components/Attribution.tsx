import React from 'react';

interface Props {
  name: string;
  url: string;
}

function Attribution({ name, url }: Props) {
  return (
    <footer className='text-xs text-center z-10'>
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        rel='noreferrer'
        className='text-blue-900'
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a href={url} className='text-blue-900'>
        {name}
      </a>
      .
    </footer>
  );
}

export default Attribution;
