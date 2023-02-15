import React from 'react';

import Paragraph from '../components/Paragraph';
import Title from '../components/Title';
import Footer from '../layout/Footer';

function SelectPlan() {
  return (
    <>
      <div>
        <Title>Select your plan</Title>
        <Paragraph>You have the option of monthly or yearly billing.</Paragraph>
      </div>
      <Footer next='/add-ons' back />
    </>
  );
}

export default SelectPlan;
