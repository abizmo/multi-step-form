import React from 'react';

import Paragraph from '../components/Paragraph';
import Title from '../components/Title';

function PersonalInfo() {
  return (
    <div>
      <Title>Personal info</Title>
      <Paragraph>
        Please provide your name, email address, and phone number.
      </Paragraph>
    </div>
  );
}

export default PersonalInfo;
