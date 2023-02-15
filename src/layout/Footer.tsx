import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

interface Props {
  confirm?: boolean;
  next: string | undefined;
  back?: boolean;
}

function Footer({ next, back = false, confirm = false }: Props) {
  const navigate = useNavigate();
  const buttons = [];

  if (next) {
    buttons.push(
      <Button
        variant={confirm ? 'accent' : 'primary'}
        onClick={() => navigate(next)}
      >
        {confirm ? 'Confirm' : 'Next'}
      </Button>,
    );
  }

  if (back) {
    buttons.push(
      <Button variant='text' onClick={() => navigate(-1)}>
        Go Back
      </Button>,
    );
  }

  return (
    <div className='absolute inset-x-0 bottom-0 bg-white lg:inset-x-16 py-6 px-4 flex flex-row-reverse justify-between'>
      {buttons}
    </div>
  );
}

export default Footer;
