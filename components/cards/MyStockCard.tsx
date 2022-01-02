import styled from "styled-components";
import { MyStockInfo } from "../../types/index/MyStockInfo";
import { plusMinus } from "../../types/style/color";
import { moneyComma } from "../../utils/format";
import { PlusMinus } from "../texts/Color";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  padding: 32px 40px;
  background-color: #fafaff;
  /* background-color: #202026; */
  /* color: #fff; */
  box-shadow: 10px 10px 20px 0 rgba(0, 20, 40, 0.2);
  border-radius: 8px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Name = styled.span`
  display: block;
  margin-bottom: 16px;
  font-size: 24px;
`;

const Current = styled.span`
  font-size: 16px;
`;

const Ratio = styled.span`
  margin-left: 4px;
  font-size: 12px;
  font-family: "S-CoreDream-5Medium";
`;

const Income = styled.span`
  display: block;
  font-size: 22px;
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
