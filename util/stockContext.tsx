"use client";

import React, { createContext, useContext, useReducer } from "react";
import {
  StateType,
  StockAction,
  STOCKS_INITIAL_STATE,
  stockReducer,
} from "./stockReducer";

/**
 *  New React context to manage the state of stock list
 *  entered by the user
 */

interface StockContextProps {
  children: React.ReactNode;
}

interface StockContextValue {
  state: StateType;
  dispatch: React.Dispatch<StockAction>;
}

const StockContext = createContext<StockContextValue>({
  state: STOCKS_INITIAL_STATE,
  dispatch: () => {},
});

export const useStockContext = () => useContext(StockContext);

export const StockContextProvider: React.FC<StockContextProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(stockReducer, STOCKS_INITIAL_STATE);
  return (
    <StockContext.Provider value={{ state, dispatch }}>
      {children}
    </StockContext.Provider>
  );
};
