import type { InferGetStaticPropsType, NextPage } from "next";
import styled from "styled-components";

import MyStockCard from "../components/cards/MyStockCard";
import MainContainer from "../components/containers/MainContainer";
import { fetcher } from "../utils/api";

interface Props {
  id: string;
  code: string;
  name: string;
  current: number;
  avg: number;
  amount: number;
  upDown: number;
}

const CardContainer = styled.div`
  width: 75%;
  margin: auto;
`;

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  initData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <MainContainer>
      <CardContainer>
        {initData.map((stock, index) => (
          <MyStockCard key={index} data={stock} />
        ))}
      </CardContainer>
    </MainContainer>
  );
};

export const getStaticProps = async () => {
  const res = await fetcher.get("user/get-my-stock");
  const initData: Props[] = res.data;

  await Promise.all(
    initData.map(async (stock) => {
      const {
        data: { regularMarketChange, regularMarketPrice },
      } = await fetcher.get(`stock/my_stock_current?code=${stock.code}`);

      stock.current = regularMarketPrice;
      stock.upDown = regularMarketChange;
    })
  );

  return {
    props: {
      initData,
    },
  };
};

export default Home;
