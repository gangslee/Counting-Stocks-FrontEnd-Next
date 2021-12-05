import type { InferGetStaticPropsType, NextPage } from "next";
import styled from "styled-components";

import MyStockCard from "../components/cards/MyStockCard";
import MainContainer from "../components/containers/MainContainer";
import { fetcher } from "../utils/api";

interface Props {
  id: string;
  code: string;
  name: string;
  avg: number;
  amount: number;
}

const CardContainer = styled.div`
  width: 75%;
  margin: auto;
`;

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <MainContainer>
      <CardContainer>
        {data.map((stock, index) => (
          <MyStockCard key={index} data={stock} />
        ))}
      </CardContainer>
    </MainContainer>
  );
};

export const getStaticProps = async () => {
  const res = await fetcher.get("user/get-my-stock");
  const data: Props[] = res.data;

  return {
    props: {
      data,
    },
  };
};

export default Home;
