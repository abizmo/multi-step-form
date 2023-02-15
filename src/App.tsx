import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import Attribution from './components/Attribution';
import Steps from './components/Steps';
import Body from './layout/Body';
import Container from './layout/Container';
import Header from './layout/Header';

import './App.css';
import routes from './pages';

function App() {
  const pages = useRoutes(routes as RouteObject[]);
  const steps = routes.slice(0, routes.length - 1);

  return (
    <div className='grid gap-4 h-screen grid-rows-abi'>
      <Container>
        <Header>
          <Steps steps={steps} />
        </Header>
        <Body>{pages}</Body>
      </Container>
      <Attribution name='Abián Izquierdo' url='https://www.abizmo.dev' />
    </div>
  );
}

export default App;
