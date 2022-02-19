import ApexChart from "react-apexcharts";
import useSWR, { SWRResponse } from "swr";
import { ThumbnailChartDatas } from "../../types/chart/ThumbnailChart";
import { localApiGet } from "../../utils/api";

interface Props {
  ticker: string;
  regularMarketChange: number;
}

const Chart = ({ ticker, regularMarketChange }: Props) => {
  const isPlus = regularMarketChange > 0;
  const color = isPlus ? "#DD4A4A" : "#5577DD";
  const { data, error }: SWRResponse<ThumbnailChartDatas> = useSWR(
    `stock/history/ninety?symbol=${ticker}`,
    localApiGet
  );

  if (error) {
    console.log("ERROR [LineChart]: useSWR(`stock/history/ninety?symbol=${ticker}`, localApiGet)");
  }

  const options: ApexCharts.ApexOptions = {
    annotations: {
      points: [
        {
          x: new Date(`${data?.maxDate}`).getTime(),
          y: data?.max,
          marker: {
            size: 6,
            strokeColor: color,
            radius: 3,
          },
          label: {
            borderColor: color,
            style: {
              color: "#fff",
              background: color,
            },
            text: `최고가 ${data?.max}`,
          },
        },
        {
          x: new Date(`${data?.minDate}`).getTime(),
          y: data?.min,
          marker: {
            size: 6,
            strokeColor: color,
            radius: 3,
          },
          label: {
            borderColor: color,
            style: {
              color: "#fff",
              background: color,
            },
            text: `최저가 ${data?.min}`,
          },
        },
      ],
    },
    chart: {},
    colors: [color],
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      type: "datetime",
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
    },
  };

  const series = [
    {
      name: ticker,
      data: data?.history,
    },
  ];
  return (
    <div className="w-full">
      {!error && <ApexChart type="line" options={options} series={series} height={400} />}
    </div>
  );
};

export default Chart;
