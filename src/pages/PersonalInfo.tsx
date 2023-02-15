import React, { useState } from 'react';
import FormGroup from '../components/FormGroup';

import Paragraph from '../components/Paragraph';
import Title from '../components/Title';
import Footer from '../layout/Footer';

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
      <Footer next='/select-plan' />
    </>
  );
}

export default PersonalInfo;
