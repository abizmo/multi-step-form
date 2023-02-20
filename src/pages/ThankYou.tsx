import React from 'react';

import Paragraph from '../components/Paragraph';
import Title from '../components/Title';

function ThankYou() {
  return (
    <div className='grid gap-6 lg:gap-8 justify-items-center text-center py-12 lg:py-28'>
      <img src='/images/icon-thank-you.svg' alt='Thank you' />
      <div className='grid lg:gap-4'>
        <Title>Thank you!</Title>
        <Paragraph>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </Paragraph>
      </div>
    </div>
  );
}

export default ThankYou;
