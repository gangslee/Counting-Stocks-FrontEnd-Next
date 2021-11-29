import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  width: 1080px;
  padding-top: 100px;
  margin: auto;
`;

const MainContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
