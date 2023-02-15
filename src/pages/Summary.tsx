import React from 'react';

import Paragraph from '../components/Paragraph';
import Title from '../components/Title';
import Footer from '../layout/Footer';

function Summary() {
  return (
    <>
      <div>
        <Title>Finishing up</Title>
        <Paragraph>
          Double-check everything looks OK before confirming.
        </Paragraph>
      </div>
      <Footer next='/thank-you' confirm back />
    </>
  );
}

export default Summary;
