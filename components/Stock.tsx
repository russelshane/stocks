"use client";

import { useStockContext } from "../util/stockContext";
import { Stock as StockType } from "../util/stockReducer";
import { StockSearch } from "./StockSearch";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Chart } from "./Chart";

export function Stock() {
  const { state, dispatch } = useStockContext();

  const handleWeightChange = async ({ weight, symbol }: any) => {
    console.log(weight, symbol);
    await dispatch({
      type: "CHANGE_WEIGHT",
      payload: {
        weight: weight,
        symbol: symbol,
      },
    });
  };

  return (
    <div className="w-full max-w-5xl mt-20 flex flex-col gap-4 mx-auto p-4">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <h3 className="text-smoke text-xl font-medium">
          Add Stocks
          <p className="text-sm text-slate-500">
            Pick at least five stocks, add the % weight to each and view the
            chart.
          </p>
        </h3>
        <StockSearch />
      </div>
      <Separator />

      <div className="flex flex-col space-y-2">
        {state.stocks.map((val: StockType, index) => (
          <div
            key={index}
            className="bg-slate-200 p-6 rounded-md flex justify-between items-center space-x-4"
          >
            <div className="flex items-center space-x-4">
              <h3>{val.name}</h3>
              <span className="bg-orange text-white px-4 py-1 rounded-md text-sm">
                {val.symbol}
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <Input
                onChange={(e) => {
                  handleWeightChange({
                    weight: e.target.value,
                    symbol: val.symbol,
                  });
                }}
                type="number"
                placeholder="Add % weight..."
              />
            </div>
          </div>
        ))}
      </div>

      <Chart />
    </div>
  );
}
