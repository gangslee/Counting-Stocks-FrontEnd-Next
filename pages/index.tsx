import type { InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

import MyStockCard from "../components/cards/MyStockCard";
import FAB from "../components/containers/FAB";
import MainContainer from "../components/containers/MainContainer";
import ModalContainer from "../components/containers/ModalContainer";
import { PlusMinus } from "../components/texts/Color";
import SectionTitle from "../components/texts/SectionTitle";
import Subtitle from "../components/texts/Subtitle";
import Title from "../components/texts/Title";
import { MyStockInfo } from "../types/index/MyStockInfo";
import { localApiGet } from "../utils/api";
import { moneyComma, sortByUpdown } from "../utils/format";

const Home: NextPage<InferGetStaticPropsType<typeof getServerSideProps>> = ({
  stockInfo,
  exchange,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  let revenue = 0;
  stockInfo.forEach((stock) => (revenue += (stock.current - stock.avg) * stock.amount * exchange));

  const [showModal, setShowModal] = useState(false);

  const handleOnClickFAB = () => {
    setShowModal(true);
  };

  const handleOnClickModalOutside = () => {
    setShowModal(false);
  };

  return (
    <MainContainer>
      <Title>
        보유 종목 수익
        <PlusMinus isPlus={revenue > 0}>{` ${moneyComma(revenue.toFixed())}`}</PlusMinus>원
      </Title>

      <Subtitle text="아래 보유종목 카드에서 상세 현황이 확인 가능합니다." />

      <SectionTitle text="보유종목 현황" />

      <div className="grid grid-cols-3 gap-x-9 gap-y-4">
        {stockInfo.map((stock, index) => (
          <Link href={`/detail/${stock.ticker}`} key={index}>
            <a>
              <MyStockCard data={stock} exchange={exchange} />
            </a>
          </Link>
        ))}
      </div>

      <FAB text="+" onClick={handleOnClickFAB} />
      {showModal && <ModalContainer closeModal={handleOnClickModalOutside} />}
    </MainContainer>
  );
};

export const getServerSideProps = async () => {
  const data = await localApiGet("user/get-my-stock");
  const initData: MyStockInfo[] = data;

  await Promise.all(
    initData.map(async (stock) => {
      const { regularMarketChange, regularMarketPrice } = await localApiGet(
        `stock/my-stock-current?code=${stock.ticker}`
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
