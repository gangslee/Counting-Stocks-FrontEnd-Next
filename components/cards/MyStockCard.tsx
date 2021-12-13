import styled from "styled-components";
import { moneyComma } from "../../utils/format";

type plusMinus = {
  isPlus: boolean;
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  padding: 32px 40px;
  /* background-color: #d0dadf; */
  background-color: #202026;
  color: #fff;
  /* box-shadow: 10px 10px 20px 0 rgba(0, 20, 40, 0.2); */
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

const Current = styled.span<plusMinus>`
  color: ${(props) => (props.isPlus ? "#dd4a4a" : "#4a4add")};
  font-size: 16px;
`;

const Ratio = styled.span`
  margin-left: 4px;
  font-size: 12px;
  font-family: "S-CoreDream-5Medium";
`;

const Income = styled.span<plusMinus>`
  display: block;
  font-size: 22px;
  margin-bottom: 16px;
`;

interface Props {
  data: {
    id: string;
    code: string;
    name: string;
    avg: number;
    amount: number;
    current: number;
    upDown: number;
    input_krw: number;
  };
  exchange: number;
}

const MyStockCard = ({ data, exchange }: Props) => {
  const { name, current, upDown, avg, input_krw, amount } = data;
  const currentRatio = Math.round(upDown * 100) / 100;
  const income = Math.round(exchange * current * amount - input_krw);
  const myRatio = (((current - avg) / avg) * 100).toFixed(2);
  console.log(income);
  return (
    <Container>
      <div>
        <Name>{name}</Name>
        <Current isPlus={currentRatio >= 0}>
          {moneyComma(current.toFixed(4))}
          <Ratio>({currentRatio}%)</Ratio>
        </Current>
      </div>
      <SubContainer>
        <Income>
          {income > 0 && "+"}
          {moneyComma(`${income}`)}원
        </Income>
        <Current isPlus={myRatio > 0}>
          {moneyComma(avg.toFixed(4))}
          <Ratio>{`(${myRatio}%)`}</Ratio>
        </Current>
      </SubContainer>
    </Container>
  );
};

export default MyStockCard;
