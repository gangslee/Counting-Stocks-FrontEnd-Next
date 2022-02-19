import { GetServerSideProps, InferGetStaticPropsType, NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";

import MainContainer from "../../components/containers/MainContainer";
import { PlusMinus } from "../../components/texts/Color";
import SectionTitle from "../../components/texts/SectionTitle";
import Subtitle from "../../components/texts/Subtitle";
import Title from "../../components/texts/Title";
import { localApiGet } from "../../utils/api";

const DynamicComponentWithNoSSR = dynamic(() => import("../../components/charts/LineChart"), {
  ssr: false,
});

const History: NextPage<InferGetStaticPropsType<typeof getServerSideProps>> = ({
  symbol,
  regularMarketChange,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const ticker = symbol;
  const router = useRouter();

  const handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const {
      ticker: { value },
    } = e.target as typeof e.target & {
      ticker: { value: string };
    };

    value === "" ? alert("티커명을 입력하지 않으셨습니다.") : router.push(value);
  };

  return (
    <MainContainer>
      <Title>
        <PlusMinus isPlus={regularMarketChange > 0}>{ticker}</PlusMinus> 상세 현황
      </Title>
      <Subtitle text="검색하신 종목의 주가 현황 및 매매일지 확인이 가능합니다." />
      <form className="flex justify-end " onSubmit={handleOnSubmit}>
        <input className="rounded-md px-3 py-2 shadow-xl text-sm" placeholder="티커명" name="ticker" />
        <button className="ml-2 px-5 rounded-md bg-gray-200 hover:outline-1 shadow-xl" type="submit">검색</button>
      </form>
      <SectionTitle text="주가 현황" />
      <div className="pt-7 px-6 bg-white shadow-2xl rounded-lg">
        <DynamicComponentWithNoSSR ticker={ticker} regularMarketChange={regularMarketChange} />
      </div>
    </MainContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { symbol },
  } = context;

  const { regularMarketChange } = await localApiGet(`stock/my-stock-current?code=${symbol}`);

  return {
    props: {
      symbol,
      regularMarketChange,
    },
  };
};

export default History;
