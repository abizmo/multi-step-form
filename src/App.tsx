import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Attribution from './components/Attribution';
import Steps from './components/Steps';
import Body from './layout/Body';
import Container from './layout/Container';
import Header from './layout/Header';

import './App.css';
import PersonalInfo from './pages/PersonalInfo';
import SelectPlan from './pages/SelectPlan';

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
          <Router>
            <Routes>
              <Route path='/' element={<PersonalInfo />} />
              <Route path='/select-plan' element={<SelectPlan />} />
            </Routes>
          </Router>
        </Body>
      </Container>
      <Attribution name='Abián Izquierdo' url='https://www.abizmo.dev' />
    </div>
  );
}

export default App;
