/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Billing } from '../types/billing';

enum ActionTypes {
  CHANGE_PLAN = 'CHANGE_PLAN',
  CHANGE_BILLING = 'CHANGE_BILLING',
}

type PlanStateType = {
  id: string;
  title: string;
  price: number;
  billing: Billing;
};

type PlanActionType =
  | { type: ActionTypes.CHANGE_PLAN; payload: Omit<PlanStateType, 'billing'> }
  | { type: ActionTypes.CHANGE_BILLING };

const initialState: PlanStateType = {
  id: 'arcade',
  title: 'Arcade',
  price: 9,
  billing: 'monthly',
};

type Context = [PlanStateType, React.Dispatch<PlanActionType>];

const PlanContext = React.createContext<Context | undefined>(undefined);

function planReducer(
  state: PlanStateType,
  action: PlanActionType,
): PlanStateType {
  switch (action.type) {
    case ActionTypes.CHANGE_PLAN:
      return {
        ...state,
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
      };
    case ActionTypes.CHANGE_BILLING:
      return {
        ...state,
        billing: state.billing === 'monthly' ? 'yearly' : 'monthly',
        price:
          state.billing === 'monthly' ? state.price * 10 : state.price / 10,
      };

    default:
      return state;
  }
}

// TODO: props:any ..... i dont like it
export function PlanProvider(props: any) {
  const [state, dispatch] = React.useReducer(planReducer, initialState);
  const value = React.useMemo(() => [state, dispatch], [state]);
  return <PlanContext.Provider value={value} {...props} />;
}

export function usePlan() {
  const context = React.useContext(PlanContext);
  if (!context) {
    throw new Error(`usePlan must be used within a PlanProvider`);
  }
  const [state, dispatch] = context;

  const changePlan = (plan: Omit<PlanStateType, 'billing'>) =>
    dispatch({ type: ActionTypes.CHANGE_PLAN, payload: plan });

  const changeBilling = () => dispatch({ type: ActionTypes.CHANGE_BILLING });

  return {
    state,
    changePlan,
    changeBilling,
  };
}
