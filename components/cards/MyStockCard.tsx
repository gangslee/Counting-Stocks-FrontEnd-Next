import styled from "styled-components";

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

const Current = styled.span`
  font-size: 18px;
`;

const Ratio = styled.span`
  margin-left: 4px;
  font-size: 14px;
`;

const Income = styled.span`
  display: block;
  font-size: 22px;
  margin-bottom: 16px;
`;

const Value = styled.span`
  display: block;
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
  const { name } = data;

  return (
    <Container>
      <div>
        <Name>{name}</Name>
        <Current>
          160.2500<Ratio>(+1.57%)</Ratio>
        </Current>
      </div>
      <SubContainer>
        <Income>+137,421원</Income>
        <Current>
          158.6300<Ratio>(+1.57%)</Ratio>
        </Current>
      </SubContainer>
    </Container>
  );
};

export default MyStockCard;
