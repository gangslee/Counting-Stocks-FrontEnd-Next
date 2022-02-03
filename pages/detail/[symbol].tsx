import { GetServerSideProps, InferGetStaticPropsType, NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

import MainContainer from "../../components/containers/MainContainer";
import { PlusMinus } from "../../components/texts/Color";
import { SectionTitle } from "../../components/texts/SectionTitle";
import Subtitle from "../../components/texts/Subtitle";
import Title from "../../components/texts/Title";
import { localApiGet } from "../../utils/api";

const Form = styled.form`
  display: flex;
  justify-content: flex-end;
`;

const Input = styled.input`
  border-radius: 4px;
  padding: 8px 12px;
  box-shadow: 4px 4px 8px 0 rgba(0, 20, 40, 0.1);
  font-size: 14px;
  font-family: "S-CoreDream-4Regular";
  font-weight: 600;
`;

const Button = styled.button`
  margin-left: 6px;
  padding: 0px 20px;
  border-radius: 4px;
  background-color: "#EFEFEF";
  box-shadow: 4px 4px 8000px 0 rgba(0, 20, 40, 0.1);
  font-family: "S-CoreDream-4Regular";
  font-weight: 600;
`;

const ChartContainer = styled.div`
  padding: 28px 24px 0 24px;
  background-color: #fff;
  box-shadow: 10px 10px 20px 0 rgba(0, 20, 40, 0.2);
  border-radius: 8px;
  cursor: pointer;
`;

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
      <Subtitle>검색하신 종목의 주가 현황 및 매매일지 확인이 가능합니다.</Subtitle>
      <Form onSubmit={handleOnSubmit}>
        <Input placeholder="티커명" name="ticker" />
        <Button type="submit">검색</Button>
      </Form>
      <SectionTitle>주가 현황</SectionTitle>
      <ChartContainer>
        <DynamicComponentWithNoSSR ticker={ticker} regularMarketChange={regularMarketChange} />
      </ChartContainer>
    </MainContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { symbol },
  } = context;

  const { regularMarketChange } = await localApiGet(`stock/my_stock_current?code=${symbol}`);

  return {
    props: {
      symbol,
      regularMarketChange,
    },
  };
};

export default History;
