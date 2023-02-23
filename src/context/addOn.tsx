/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Billing } from '../types/billing';

enum ActionTypes {
  ADD_ADDON = 'ADD_ADDON',
  REMOVE_ADDON = 'REMOVE_ADDON',
  UPDATE_PRICE = 'UPDATE_PRICE',
}

export type AddonStateType = {
  id: string;
  title: string;
  price: number;
};

const initialState: AddonStateType[] = [];

type AddonActionType =
  | { type: ActionTypes.ADD_ADDON; payload: AddonStateType }
  | { type: ActionTypes.REMOVE_ADDON; payload: string }
  | { type: ActionTypes.UPDATE_PRICE; payload: Billing };

type Context = [AddonStateType[], React.Dispatch<AddonActionType>];

const AddonContext = React.createContext<Context | undefined>(undefined);

function addOnReducer(state: AddonStateType[], action: AddonActionType) {
  switch (action.type) {
    case ActionTypes.ADD_ADDON:
      return [...state, action.payload];

    case ActionTypes.REMOVE_ADDON:
      return state.filter((addon) => addon.id !== action.payload);

    case ActionTypes.UPDATE_PRICE:
      return action.payload === 'monthly'
        ? state.map((addon) => ({ ...addon, price: addon.price / 10 }))
        : state.map((addon) => ({ ...addon, price: addon.price * 10 }));

    default:
      return state;
  }
}

export function AddonPropvider(props: any) {
  const [state, dispatch] = React.useReducer(addOnReducer, initialState);
  const value = React.useMemo(() => [state, dispatch], [state]);

  return <AddonContext.Provider value={value} {...props} />;
}

export function useAddon() {
  const context = React.useContext(AddonContext);
  if (!context) {
    throw new Error(`usePlan must be used within a PlanProvider`);
  }
  const [state, dispatch] = context;

  const addAddon = (addOn: AddonStateType) =>
    dispatch({ type: ActionTypes.ADD_ADDON, payload: addOn });
  const removeAddon = (id: string) =>
    dispatch({ type: ActionTypes.REMOVE_ADDON, payload: id });
  const updatePrice = (billing: Billing) =>
    dispatch({ type: ActionTypes.UPDATE_PRICE, payload: billing });

  return { state, addAddon, removeAddon, updatePrice };
}
