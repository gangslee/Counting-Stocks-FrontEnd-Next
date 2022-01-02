import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  margin: auto;
  max-width: 1080px;
  padding-top: 100px;
`;

const MainContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
