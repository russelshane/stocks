"use client";

export interface Stock {
  id: number;
  symbol: string;
  name: string;
  weight?: number;
}

export interface StateType {
  stocks: Stock[];
}

export interface StockAction {
  type: "ADD_STOCK" | "REMOVE_STOCK" | "CHANGE_WEIGHT";
  payload: any;
}

/**
 * Default state of stocks must be empty.
 * (User hasn't entered any stocks on their list yet)
 */
export const STOCKS_INITIAL_STATE = {
  stocks: [],
};

/**
 * Stock Reducer Function
 */
export const stockReducer = (state: StateType, action: StockAction) => {
  switch (action.type) {
    case "ADD_STOCK":
      return {
        ...state,
        stocks: [...state.stocks, action.payload],
      };
    case "CHANGE_WEIGHT":
      return {
        ...state,
        stocks: state.stocks.map((stock) => {
          if (stock.symbol === action.payload.symbol) {
            return { ...stock, weight: action.payload.weight };
          }
          return stock;
        }),
      };
    case "REMOVE_STOCK":
      return {
        ...state,
        stocks: state.stocks.filter(
          (stock: Stock) => stock.symbol !== action.payload.symbol
        ),
      };
    default:
      return state;
  }
};
