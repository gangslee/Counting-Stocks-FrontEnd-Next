import ApexChart from "react-apexcharts";
import styled from "styled-components";
import useSWR from "swr";
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
  if (error) {
    console.log("ERROR : useSWR(`stock/history/ninety?symbol=${ticker}`, localApiGet)");
  }

  const options = {
    chart: {
      foreColor: "#000",
      parentHeightOffset: 0,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: [isPlus ? "#dd4a4a" : "#5577dd"],
    // tooltip: {
    //   enabled: false,
    // },
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
      name: ticker,
      data,
    },
  ];
  return (
    <Container>{!error && <ApexChart options={options} series={series} type="line" />}</Container>
  );
};

export default Chart;
