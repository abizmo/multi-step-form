import React from 'react';

import Attribution from './components/Attribution';
import Paragraph from './components/Paragraph';
import Steps from './components/Steps';
import Title from './components/Title';
import Body from './layout/Body';
import Container from './layout/Container';
import Header from './layout/Header';

import './App.css';

const steps = [
  {
    id: 1,
    name: 'Your info',
  },
  {
    id: 2,
    name: 'Select plan',
  },
  {
    id: 3,
    name: 'Add-ons',
  },
  {
    id: 4,
    name: 'Summary',
  },
];

function App() {
  return (
    <div className='grid gap-4 h-screen grid-rows-abi'>
      <Container>
        <Header>
          <Steps steps={steps} currentStep={1} />
        </Header>
        <Body>
          <Title>Personal info</Title>
          <Paragraph>
            Please provide your name, email address, and phone number.
          </Paragraph>
        </Body>
      </Container>
      <Attribution name='Abián Izquierdo' url='https://www.abizmo.dev' />
    </div>
  );
}

export default App;
