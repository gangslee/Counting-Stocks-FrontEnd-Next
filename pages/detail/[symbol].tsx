import { useRouter } from "next/router";
import styled from "styled-components";

const SymbolTest = styled.div`
  margin-top: 100px;
`;

const History = () => {
  const router = useRouter();
  const { symbol } = router.query;
  return <SymbolTest>{symbol}</SymbolTest>;
};

export default History;
