import ApexChart from "react-apexcharts";
import useSWR, { SWRResponse } from "swr"
  ;
import { ThumbnailChartDatas } from "../../types/chart/ThumbnailChart";
import { localApiGet } from "../../utils/api";

interface Props {
  ticker: string;
  isPlus: boolean;
}

const Chart = ({ ticker, isPlus }: Props) => {
  const color = isPlus ? "#DD4A4A" : "#5577DD";
  const { data, error }: SWRResponse<ThumbnailChartDatas> = useSWR(
    `stock/history/ninety?symbol=${ticker}`,
    localApiGet
  );

  if (error) {
    console.log("ERROR : useSWR(`stock/history/ninety?symbol=${ticker}`, localApiGet)");
  }

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: [color],
    tooltip: {
      enabled: false,
    },
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
    },
    yaxis: {
      show: false,
    },
  };

  const series = [
    {
      name: ticker,
      data: data?.history,
    },
  ];
  return (
    <div className="w-full">{!error && <ApexChart type="line" options={options} series={series} />}</div>
  );
};

export default Chart;
