import type { InferGetStaticPropsType, NextPage } from "next";
import styled from "styled-components";

import MyStockCard from "../components/cards/MyStockCard";
import MainContainer from "../components/containers/MainContainer";
import { PlusMinus } from "../components/texts/Color";
import { SectionTitle } from "../components/texts/SectionTitle";
import { MyStockInfo } from "../types/index/MyStockInfo";
import { fetcher } from "../utils/api";
import { moneyComma, sortByUpdown } from "../utils/format";

const TitleContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  text-align: center;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 24px;
  font-size: 36px;
  font-family: "Lato";
  font-weight: 600;
  color: #222;
`;

const Subtitle = styled.span`
  display: inline-block;
  font-family: "S-CoreDream-4Regular";
  font-weight: 600;
  font-size: 20px;
  color: #222;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12px 16px;
  margin: auto;
`;

const Home: NextPage<InferGetStaticPropsType<typeof getServerSideProps>> = ({
  stockInfo,
  exchange,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  let revenue = 0;
  stockInfo.forEach((stock) => (revenue += (stock.current - stock.avg) * stock.amount * exchange));

  return (
    <MainContainer>
      <TitleContainer>
        <Title>
          보유 종목 수익
          <PlusMinus isPlus={revenue > 0}>{` ${moneyComma(revenue.toFixed())}`}</PlusMinus>원
        </Title>
        <Subtitle>아래 보유종목 카드에서 상세 현황이 확인 가능합니다.</Subtitle>
      </TitleContainer>
      <SectionTitle>종목 현황</SectionTitle>
      <CardContainer>
        {stockInfo.map((stock, index) => (
          <MyStockCard key={index} data={stock} exchange={exchange} />
        ))}
      </CardContainer>
    </MainContainer>
  );
};

export const getServerSideProps = async () => {
  const res = await fetcher.get("user/get-my-stock");
  const initData: MyStockInfo[] = res.data;

  await Promise.all(
    initData.map(async (stock) => {
      const {
        data: { regularMarketChange, regularMarketPrice },
      } = await fetcher.get(`stock/my_stock_current?code=${stock.code}`);

      stock.current = regularMarketPrice;
      stock.upDown = regularMarketChange;
    })
  );

  const exchange = await fetcher.get("exchange/today");

  return {
    props: {
      stockInfo: sortByUpdown(initData),
      exchange: exchange.data,
    },
  };
};

export default Home;
