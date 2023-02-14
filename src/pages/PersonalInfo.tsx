import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import FormGroup from '../components/FormGroup';

import Paragraph from '../components/Paragraph';
import Title from '../components/Title';

function PersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const { name, email, phone } = personalInfo;

  const handleChange = (id: string, value: string): void =>
    setPersonalInfo((actualInfo) => ({
      ...actualInfo,
      [id]: value,
    }));

  return (
    <>
      <div className='mb-5'>
        <Title>Personal info</Title>
        <Paragraph>
          Please provide your name, email address, and phone number.
        </Paragraph>
      </div>
      <div className='grid gap-4 lg:gap-6'>
        <FormGroup
          label='Name'
          id='name'
          placeholder='e.g. Stephen King'
          errorMessage='This field is required'
          value={name}
          onChange={(evt) => handleChange('name', evt.currentTarget.value)}
        />
        <FormGroup
          label='Email Address'
          id='email'
          placeholder='e.g. stephenking@lorem.com'
          errorMessage='This field is required'
          value={email}
          onChange={(evt) => handleChange('email', evt.currentTarget.value)}
        />
        <FormGroup
          label='Phone Number'
          id='phone'
          placeholder='e.g. +1 2 34 567 890'
          errorMessage='This field is required'
          value={phone}
          onChange={(evt) => handleChange('phone', evt.currentTarget.value)}
        />
      </div>
      <div className='absolute inset-x-0 bottom-0 bg-white lg:inset-x-16 py-6 px-4 flex flex-row-reverse -z-10 lg:z-0'>
        <Link to='/select-plan'>
          <Button>Next</Button>
        </Link>
      </div>
    </>
  );
}

export default PersonalInfo;
