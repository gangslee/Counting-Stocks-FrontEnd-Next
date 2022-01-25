import { GetServerSideProps, InferGetStaticPropsType, NextPage } from "next";
import React, { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";

import MainContainer from "../../components/containers/MainContainer";
import { localApiGet } from "../../utils/api";

const Form = styled.form``;

const Input = styled.input`
  border-radius: 4px;
  padding: 12px;
  font-size: 18px;
  font-weight: 600;
`;

const Button = styled.button``;

const History: NextPage<InferGetStaticPropsType<typeof getServerSideProps>> = ({
  symbol,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const [ticker, setTicker] = useState(symbol as string);

  const { data, error } = useSWR(`stock/my_stock_current?code=${ticker}`, localApiGet);

  const handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      ticker: { value: string };
    };
    setTicker(target.ticker.value);
  };

  return (
    <MainContainer>
      <Form onSubmit={handleOnSubmit}>
        <Input placeholder="Ticker" name="ticker" />
        <Button type="submit">Search</Button>
        <h1>{ticker}</h1>
      </Form>
    </MainContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { symbol },
  } = context;

  return {
    props: {
      symbol,
    },
  };
};

export default History;
