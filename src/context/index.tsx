import React, { PropsWithChildren } from 'react';
import { AddonPropvider, useAddon } from './addOn';
import { PlanProvider, usePlan } from './plan';

function AppStateProvider({ children }: PropsWithChildren): JSX.Element {
  return (
    <PlanProvider>
      <AddonPropvider>{children}</AddonPropvider>
    </PlanProvider>
  );
}

export default AppStateProvider;

export { useAddon, usePlan };
