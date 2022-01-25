import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import MainContainer from "../../components/containers/MainContainer";

const Form = styled.form``;

const Input = styled.input`
  border-radius: 4px;
  padding: 12px;
  font-size: 18px;
  font-weight: 600;
`;

const Button = styled.button``;

const History = () => {
  const {
    query: { symbol },
  } = useRouter();

  const handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      ticker: { value: string };
    };
  };

  return (
    <MainContainer>
      <Form onSubmit={handleOnSubmit}>
        <Input placeholder="Ticker" name="ticker" />
        <Button type="submit">Search</Button>
      </Form>
    </MainContainer>
  );
};

export default History;
