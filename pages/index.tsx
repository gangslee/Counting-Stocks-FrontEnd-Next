import type { NextPage } from "next";
import styled from "styled-components";

import MyStockCard from "../components/cards/MyStockCard";
import MainContainer from "../components/containers/MainContainer";

const sampleData = [
  {
    id: "_asdasdsadsadsadsa",
    code: "APPL",
    name: "애플",
    value: 159.1234,
    amount: 34,
  },
  {
    id: "_asdasdzxczxcsadsadsa",
    code: "DIS",
    name: "월트디즈니",
    value: 150.1234,
    amount: 121,
  },
];

const CardContainer = styled.div`
  width: 60%;
  margin: auto;
`;

const Home: NextPage = () => {
  return (
    <MainContainer>
      <CardContainer>
        {sampleData.map((data) => (
          <MyStockCard key={data.id} />
        ))}
      </CardContainer>
    </MainContainer>
  );
};

export default Home;
