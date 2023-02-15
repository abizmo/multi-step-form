import React from 'react';
import { type RouteObject } from 'react-router-dom';
import { Step } from '../components/Steps';

import AddOns from './AddOns';
import PersonalInfo from './PersonalInfo';
import SelectPlan from './SelectPlan';
import Summary from './Summary';
import ThankYou from './ThankYou';

export type Route = RouteObject & Step;

const routes: Route[] = [
  {
    path: '/',
    name: 'Your info',
    element: <PersonalInfo />,
    errorElement: <h1>Page Not Found!</h1>,
  },
  {
    path: '/select-plan',
    name: 'Select plan',
    element: <SelectPlan />,
  },
  {
    path: '/add-ons',
    name: 'Add-ons',
    element: <AddOns />,
  },
  {
    path: '/summary',
    name: 'Summary',
    element: <Summary />,
  },
  {
    path: '/thank-you',
    name: 'Thank you',
    element: <ThankYou />,
  },
];

export default routes;
