import styled from "styled-components";
import { MyStockInfo } from "../../types/index/MyStockInfo";
import { moneyComma } from "../../utils/format";
import { PlusMinus } from "../texts/Color";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  margin: 8px auto;
  padding: 20px;
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

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Name = styled.span`
  display: block;
  margin-bottom: 16px;
  font-size: 16px;
`;

const Current = styled.span`
  font-size: 14px;
`;

const Ratio = styled.span`
  margin-left: 4px;
  font-size: 10px;
  font-family: "S-CoreDream-5Medium";
`;

const Income = styled.span`
  display: block;
  font-size: 16px;
  margin-bottom: 16px;
`;

interface Props {
  data: MyStockInfo;
  exchange: number;
}

const MyStockCard = ({ data, exchange }: Props) => {
  const { name, current, upDown, avg, amount } = data;
  const currentRatio = Math.round(upDown * 100) / 100;
  const income = Math.round(exchange * (current - avg) * amount);
  const myRatio = (((current - avg) / avg) * 100).toFixed(2);

  return (
    <Container>
      <div>
        <Name>{name}</Name>
        <Current>
          <PlusMinus isPlus={currentRatio >= 0}>
            {moneyComma(current.toFixed(4))} <Ratio>({currentRatio}%)</Ratio>
          </PlusMinus>
        </Current>
      </div>
      <SubContainer>
        <Income>
          {income > 0 && "+"}
          {moneyComma(`${income}`)}원
        </Income>
        <Current>
          <PlusMinus isPlus={parseFloat(myRatio) >= 0}>
            {moneyComma(avg.toFixed(4))}
            <Ratio>{`(${myRatio}%)`}</Ratio>
          </PlusMinus>
        </Current>
      </SubContainer>
    </Container>
  );
};

export default MyStockCard;
