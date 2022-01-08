import Chart from "react-apexcharts";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

export default () => {
  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
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
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];
  return (
    <Container>
      <Chart options={options} series={series} type="line" height="150" />
    </Container>
  );
};
