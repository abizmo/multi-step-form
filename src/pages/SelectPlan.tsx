import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

import Paragraph from '../components/Paragraph';
import Title from '../components/Title';

function SelectPlan() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Title>Select your plan</Title>
        <Paragraph>You have the option of monthly or yearly billing.</Paragraph>
      </div>
      <div className='absolute inset-x-0 bottom-0 bg-white lg:inset-x-16 py-6 px-4 flex flex-row-reverse justify-between'>
        <Button onClick={() => navigate('/add-ons')}>Next</Button>
        <Button variant='text' onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    </>
  );
}

export default SelectPlan;
