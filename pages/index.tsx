import type { NextPage } from "next";
import styled from "styled-components";

import MyStockCard from "../components/cards/MyStockCard";
import MainContainer from "../components/containers/MainContainer";

const sampleData = [
  {
    id: "_asdasdsadsadsadsa",
    code: "APPL",
    name: "애플",
    avg: 159.1234,
    amount: 34,
  },
];

const CardContainer = styled.div`
  width: 75%;
  margin: auto;
`;

const Home: NextPage = () => {
  return (
    <MainContainer>
      <CardContainer>
        {sampleData.map((stock) => (
          <MyStockCard key={stock.id} data={stock} />
        ))}
      </CardContainer>
    </MainContainer>
  );
};

export default Home;
