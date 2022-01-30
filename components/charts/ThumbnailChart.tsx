import ApexChart from "react-apexcharts";
import styled from "styled-components";
import useSWR, { SWRResponse } from "swr";
import { ThumbnailChartDatas } from "../../types/index/MyStockInfo";
import { localApiGet } from "../../utils/api";

const Container = styled.div`
  width: 100%;
`;

interface Props {
  ticker: string;
  isPlus: boolean;
}

const Chart = ({ ticker, isPlus }: Props) => {
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
    colors: [isPlus ? "#dd4a4a" : "#5577dd"],
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
    <Container>{!error && <ApexChart type="line" options={options} series={series} />}</Container>
  );
};

export default Chart;
