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
  regularMarketChange: number;
}

const Chart = ({ ticker, regularMarketChange }: Props) => {
  const isPlus = regularMarketChange > 0;
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
            strokeColor: isPlus ? "#dd4a4a" : "#5577dd",
            radius: 3,
          },
          label: {
            borderColor: isPlus ? "#dd4a4a" : "#5577dd",
            style: {
              color: "#fff",
              background: isPlus ? "#dd4a4a" : "#5577dd",
            },
            text: `최고가 ${data?.max}`,
          },
        },
        {
          x: new Date(`${data?.minDate}`).getTime(),
          y: data?.min,
          marker: {
            size: 6,
            strokeColor: isPlus ? "#dd4a4a" : "#5577dd",
            radius: 3,
          },
          label: {
            borderColor: isPlus ? "#dd4a4a" : "#5577dd",
            style: {
              color: "#fff",
              background: isPlus ? "#dd4a4a" : "#5577dd",
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
