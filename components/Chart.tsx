"use client";

import { useStockContext } from "../util/stockContext";
import HighchartsReact from "highcharts-react-official";
import * as Highcharts from "highcharts";
import { useEffect, useRef, useState } from "react";
import { fetchHistoricalData } from "../lib/api/stock-api";

export function Chart(props: HighchartsReact.Props) {
  const { state, dispatch } = useStockContext();
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const [chartData, setChartData] = useState();

  const options = {
    title: { text: "Historical Data" },
    series: [
      {
        type: "line",
        data: [],
      },
    ],
  };

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        {...props}
      />
    </>
  );
}
