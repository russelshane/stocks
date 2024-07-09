import { CONFIG } from "../config";

const basePath = "https://finnhub.io/api/v1";

export const searchSymbols = async (query: string) => {
  const url = `${basePath}/search?q=${query}&token=${CONFIG.STOCKS_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

/**
 * Fetches the details of a given company
 */
export const fetchStockDetails = async (stockSymbol: string) => {
  const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${CONFIG.STOCKS_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

/**
 * Fetches historical data of a stock (to be displayed on a chart)
 */
export const fetchHistoricalData = async (
  stockSymbol: string,
  from: any,
  to: any
) => {
  const url = `https://api.polygon.io/v2/aggs/ticker/${stockSymbol}/range/1/day/${from}/${to}?apiKey=kD6VcAdhdtXsHdKq25L40K5_6LseQqDn`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};
