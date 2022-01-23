import type { InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

import MyStockCard from "../components/cards/MyStockCard";
import MainContainer from "../components/containers/MainContainer";
import { PlusMinus } from "../components/texts/Color";
import { SectionTitle } from "../components/texts/SectionTitle";
import { MyStockInfo } from "../types/index/MyStockInfo";
import { localApiGet } from "../utils/api";
import { moneyComma, sortByUpdown } from "../utils/format";

const Title = styled.span`
  display: block;
  text-align: center;
  margin: 24px 0px;
  font-size: 36px;
  font-family: "Lato";
  font-weight: 600;
  color: #222;
`;

const Subtitle = styled.span`
  display: block;
  text-align: center;
  font-family: "S-CoreDream-4Regular";
  font-weight: 600;
  font-size: 18px;
  color: #222;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px 36px;
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
      <Title>
        보유 종목 수익
        <PlusMinus isPlus={revenue > 0}>{` ${moneyComma(revenue.toFixed())}`}</PlusMinus>원
      </Title>
      <Subtitle>아래 보유종목 카드에서 상세 현황이 확인 가능합니다.</Subtitle>

      <SectionTitle>종목 현황</SectionTitle>

      <CardContainer>
        {stockInfo.map((stock, index) => (
          <Link href={`/detail/${stock.ticker}`} key={index}>
            <a>
              <MyStockCard data={stock} exchange={exchange} />
            </a>
          </Link>
        ))}
      </CardContainer>
    </MainContainer>
  );
};

export const getServerSideProps = async () => {
  const data = await localApiGet("user/get-my-stock");
  const initData: MyStockInfo[] = data;

  await Promise.all(
    initData.map(async (stock) => {
      const { regularMarketChange, regularMarketPrice } = await localApiGet(
        `stock/my_stock_current?code=${stock.ticker}`
      );

      stock.current = regularMarketPrice;
      stock.upDown = regularMarketChange;
    })
  );

  const exchange = await localApiGet("exchange/today");

  return {
    props: {
      stockInfo: sortByUpdown(initData),
      exchange,
    },
  };
};

export default Home;
