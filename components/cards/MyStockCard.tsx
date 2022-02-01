import dynamic from "next/dynamic";
import styled from "styled-components";

import { MyStockInfo } from "../../types/index/MyStockInfo";
import { moneyComma } from "../../utils/format";
import { PlusMinus } from "../texts/Color";

const Container = styled.div`
  width: 100%;
  margin: 8px auto;
  padding: 28px 16px 0 16px;
  background-color: #fff;
  /* background-color: #202026; */
  /* color: #fff; */
  box-shadow: 10px 10px 20px 0 rgba(0, 20, 40, 0.2);
  border-radius: 8px;
  :hover {
    cursor: pointer;
    transform: translate(-2px, -8px);
    background-color: #fcfcfc;
  }
  transition: 0.2s transform linear;
  z-index: 1;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 0 8px;

  :first-child {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const ChartContainer = styled.div`
  width: 100%;
`;

const Ratio = styled.span`
  margin-left: 4px;
  font-size: 10px;
  font-family: "S-CoreDream-5Medium";
`;

interface Props {
  data: MyStockInfo;
  exchange: number;
}

const DynamicComponentWithNoSSR = dynamic(() => import("../charts/ThumbnailChart"), { ssr: false });

const MyStockCard = ({ data, exchange }: Props) => {
  const { ticker, name, current, upDown, avg, amount } = data;
  const currentRatio = Math.round(upDown * 100) / 100;
  const income = Math.round(exchange * (current - avg) * amount);
  const myRatio = (((current - avg) / avg) * 100).toFixed(2);

  return (
    <Container>
      <FlexContainer>
        <span>{name}</span>
        <span>
          {income > 0 && "+"}
          {moneyComma(`${income}`)}원
        </span>
      </FlexContainer>

      <FlexContainer>
        <PlusMinus isPlus={currentRatio >= 0}>
          {moneyComma(current.toFixed(4))}
          <Ratio>({currentRatio}%)</Ratio>
        </PlusMinus>

        <PlusMinus isPlus={parseFloat(myRatio) >= 0}>
          {moneyComma(avg.toFixed(4))}
          <Ratio>{`(${myRatio}%)`}</Ratio>
        </PlusMinus>
      </FlexContainer>

      <ChartContainer>
        <DynamicComponentWithNoSSR ticker={ticker} isPlus={currentRatio >= 0} />
      </ChartContainer>
    </Container>
  );
};

export default MyStockCard;
