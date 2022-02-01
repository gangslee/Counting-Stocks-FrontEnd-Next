import ApexChart from "react-apexcharts";
import styled from "styled-components";
import useSWR, { SWRResponse } from "swr";
import { CS_BLUE, CS_RED } from "../../styles/config";
import { ThumbnailChartDatas } from "../../types/chart/ThumbnailChart";
import { localApiGet } from "../../utils/api";

const Container = styled.div`
  width: 100%;
`;

interface Props {
  ticker: string;
  regularMarketChange: number;
}

const Chart = ({ ticker, regularMarketChange }: Props) => {
  const isPlus = regularMarketChange > 0;
  const color = isPlus ? CS_RED : CS_BLUE;
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
    colors: [isPlus ? "#dd4a4a" : "#5577dd"],
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
    <Container>
      {!error && <ApexChart type="line" options={options} series={series} height={400} />}
    </Container>
  );
};

export default Chart;
