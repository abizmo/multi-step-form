import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

import Paragraph from '../components/Paragraph';
import Title from '../components/Title';

function Summary() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Title>Finishing up</Title>
        <Paragraph>
          Double-check everything looks OK before confirming.
        </Paragraph>
      </div>
      <div className='absolute inset-x-0 bottom-0 bg-white lg:inset-x-16 py-6 px-4 flex flex-row-reverse justify-between'>
        <Button variant='accent' onClick={() => navigate('/thank-you')}>
          Confirm
        </Button>
        <Button variant='text' onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    </>
  );
}

export default Summary;
