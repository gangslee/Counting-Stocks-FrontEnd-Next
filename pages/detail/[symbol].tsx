import { GetServerSideProps, InferGetStaticPropsType, NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

import MainContainer from "../../components/containers/MainContainer";
import { SectionTitle } from "../../components/texts/SectionTitle";
import { localApiGet } from "../../utils/api";

const Form = styled.form``;

const Input = styled.input`
  border-radius: 4px;
  padding: 12px;
  font-size: 18px;
  font-weight: 600;
`;

const Button = styled.button``;

const ChartContainer = styled.div`
  margin: 16px auto;
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

    const target = e.target as typeof e.target & {
      ticker: { value: string };
    };
    router.push(target.ticker.value);
  };

  return (
    <MainContainer>
      <Form onSubmit={handleOnSubmit}>
        <Input placeholder="Ticker" name="ticker" />
        <Button type="submit">Search</Button>
      </Form>
      <SectionTitle>{ticker}</SectionTitle>
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
