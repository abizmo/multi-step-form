import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

import Paragraph from '../components/Paragraph';
import Title from '../components/Title';

function AddOns() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Title>Pick add-ons</Title>
        <Paragraph>Add-ons help enhance your gamin experience.</Paragraph>
      </div>
      <div className='absolute inset-x-0 bottom-0 bg-white lg:inset-x-16 py-6 px-4 flex flex-row-reverse justify-between'>
        <Button onClick={() => navigate('/summary')}>Next</Button>
        <Button variant='text' onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    </>
  );
}

export default AddOns;
