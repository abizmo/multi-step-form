import React, { PropsWithChildren } from 'react';
import { PlanProvider, usePlan } from './plan';

function AppStateProvider({ children }: PropsWithChildren): JSX.Element {
  return <PlanProvider>{children}</PlanProvider>;
}

export default AppStateProvider;

export { usePlan };
