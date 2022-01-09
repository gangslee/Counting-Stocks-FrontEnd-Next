import ApexChart from "react-apexcharts";
import styled from "styled-components";
import useSWR from "swr";
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
  const { data, error } = useSWR(`stock/history/ninety?symbol=${ticker}`, localApiGet);
  console.log(data);
  if (error) {
    console.log("ERROR : useSWR(`stock/history/ninety?symbol=${ticker}`, localApiGet)");
  }

  const options = {
    chart: {
      foreColor: "#000",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: [isPlus ? "#dd4a4a" : "#5577dd"],
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      position: "bottom",
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
      name: "series-1",
      data,
    },
  ];
  return (
    <Container>
      <ApexChart options={options} series={series} type="line" />
    </Container>
  );
};

export default Chart;
