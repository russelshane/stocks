"use client";

import { useStockContext } from "../util/stockContext";
import HighchartsReact from "highcharts-react-official";
import * as Highcharts from "highcharts";
import { useEffect, useRef, useState } from "react";
import { fetchHistoricalData } from "../lib/api/stock-api";
import { Button } from "./ui/button";

export function Chart(props: HighchartsReact.Props) {
  const { state, dispatch } = useStockContext();
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const [chartData, setChartData] = useState<any>([]);

  const options = {
    title: { text: "Historical Data" },
    series: [
      {
        type: "line",
        data: [],
      },
    ],
  };

  const fetchStockData = async () => {
    await fetchHistoricalData(
      state.stocks[0].symbol,
      state.stocks[1].symbol,
      state.stocks[2].symbol,
      state.stocks[3].symbol,
      state.stocks[4].symbol
    ).then(async (st) => {
      await setChartData([
        {
          data: st.stock1?.results,
        },
        {
          data: st.stock2?.results,
        },
        {
          data: st.stock3?.results,
        },
        {
          data: st.stock4?.results,
        },
        {
          data: st.stock5?.results,
        },
      ]);

      console.log(chartData);
    });
  };

  return (
    <>
      <p>Click the button to update chart...</p>
      <Button onClick={fetchStockData} disabled={state.stocks.length < 5}>
        View Historical Data / Update Chart
      </Button>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          title: { text: "Historical Data" },
          series: chartData,
        }}
        ref={chartComponentRef}
        {...props}
      />
    </>
  );
}
