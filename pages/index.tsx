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
  userData,
  currentValues,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <MainContainer>
      <CardContainer>
        {userData.map((stock, index) => (
          <MyStockCard key={index} data={stock} />
        ))}
      </CardContainer>
    </MainContainer>
  );
};

export const getStaticProps = async () => {
  const res = await fetcher.get("user/get-my-stock");
  const userData: Props[] = res.data;

  const currentValues = await Promise.all(
    userData.map((data) => fetcher.get(`stock/my_stock_current?code=${data.code}`))
  );

  return {
    props: {
      userData,
      currentValues,
    },
  };
};

export default Home;
