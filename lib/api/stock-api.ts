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
  stockSymbol1: string,
  stockSymbol2: string,
  stockSymbol3: string,
  stockSymbol4: string,
  stockSymbol5: string
) => {
  const fetch1 = `https://api.polygon.io/v2/aggs/ticker/${stockSymbol1}/range/1/day/2023-06-06/2024-06-06?apiKey=kD6VcAdhdtXsHdKq25L40K5_6LseQqDn`;
  const response1 = await fetch(fetch1);

  const fetch2 = `https://api.polygon.io/v2/aggs/ticker/${stockSymbol2}/range/1/day/2023-06-06/2024-06-06?apiKey=kD6VcAdhdtXsHdKq25L40K5_6LseQqDn`;
  const response2 = await fetch(fetch2);

  const fetch3 = `https://api.polygon.io/v2/aggs/ticker/${stockSymbol3}/range/1/day/2023-06-06/2024-06-06?apiKey=kD6VcAdhdtXsHdKq25L40K5_6LseQqDn`;
  const response3 = await fetch(fetch3);

  const fetch4 = `https://api.polygon.io/v2/aggs/ticker/${stockSymbol4}/range/1/day/2023-06-06/2024-06-06?apiKey=kD6VcAdhdtXsHdKq25L40K5_6LseQqDn`;
  const response4 = await fetch(fetch4);

  const fetch5 = `https://api.polygon.io/v2/aggs/ticker/${stockSymbol5}/range/1/day/2023-06-06/2024-06-06?apiKey=kD6VcAdhdtXsHdKq25L40K5_6LseQqDn`;
  const response5 = await fetch(fetch5);

  return {
    stock1: await response1.json(),
    stock2: await response2.json(),
    stock3: await response3.json(),
    stock4: await response4.json(),
    stock5: await response5.json(),
  };
};
