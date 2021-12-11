import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  max-width: 800px;
  padding-top: 100px;
  margin: auto;
`;

const MainContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
