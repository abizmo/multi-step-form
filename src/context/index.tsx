import React, { PropsWithChildren } from 'react';
import { PlanProvider } from './plan';

function AppStateProvider({ children }: PropsWithChildren): JSX.Element {
  return <PlanProvider>{children}</PlanProvider>;
}

export default AppStateProvider;
