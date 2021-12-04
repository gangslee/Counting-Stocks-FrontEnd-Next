import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  padding: 32px 40px;
  background-color: #fff;
  box-shadow: 10px 10px 20px 0 rgba(95, 111, 174, 0.2);
  border-radius: 8px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Code = styled.span`
  font-size: 28px;
  font-weight: 600;
`;

const Amount = styled.span`
  margin-left: 4px;
  font-size: 18px;
`;

const Name = styled.span`
  display: block;
  margin: 16px 0;
  font-size: 20px;
`;

const Current = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const Ratio = styled.span`
  margin-left: 4px;
  font-size: 14px;
`;

const Income = styled.span`
  display: block;
  font-size: 22px;
  margin-bottom: 8px;
`;

const Value = styled.span`
  display: block;
  margin-top: 12px;
  font-size: 16px;
`;

interface Props {
  data: {
    id: string;
    code: string;
    name: string;
    avg: number;
    amount: number;
  };
}

const MyStockCard = ({ data }: Props) => {
  const { code, amount, name } = data;

  return (
    <Container>
      <div>
        <Code>{code}</Code>
        <Amount>({amount}EA)</Amount>
        <Name>{name}</Name>
        <Current>
          USD 160.2500 <Ratio>(+1.57%)</Ratio>
        </Current>
      </div>
      <RightContainer>
        <Income>+137,421원</Income>
        <Value>매입금액 1,104,789원</Value>
        <Value>평가금액 1,234,567원</Value>
        <Value>손익률 +10.08%</Value>
      </RightContainer>
    </Container>
  );
};

export default MyStockCard;
