import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 1220px;
  height: 73px;
  background-color: #fff;
  z-index: 1;
  border-bottom: 3px solid #dbdfe5;
`;

const Header = () => {
  return <Container></Container>;
};

export default Header;
