import React from 'react';

import Paragraph from '../components/Paragraph';
import Title from '../components/Title';
import Footer from '../layout/Footer';

function AddOns() {
  return (
    <>
      <div>
        <Title>Pick add-ons</Title>
        <Paragraph>Add-ons help enhance your gamin experience.</Paragraph>
      </div>
      <Footer next='/summary' back />
    </>
  );
}

export default AddOns;
