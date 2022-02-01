import ApexChart from "react-apexcharts";
import styled from "styled-components";
import useSWR, { SWRResponse } from "swr";
import { CS_BLUE, CS_RED } from "../../styles/Theme";
import { ThumbnailChartDatas } from "../../types/chart/ThumbnailChart";
import { localApiGet } from "../../utils/api";

const Container = styled.div`
  width: 100%;
`;

interface Props {
  ticker: string;
  isPlus: boolean;
}

const Chart = ({ ticker, isPlus }: Props) => {
  const color = isPlus ? CS_RED : CS_BLUE;
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
    <Container>{!error && <ApexChart type="line" options={options} series={series} />}</Container>
  );
};

export default Chart;
