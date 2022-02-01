import styled from "styled-components";

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #fff;
  color: black;
  border-radius: 50%;
  box-shadow: 10px 10px 20px 0 rgba(0, 20, 40, 0.2);
  font-size: 28px;
  cursor: pointer;
  :hover {
    transform: translate(0px, -4px);
    background-color: #fcfcfc;
  }
  transition: 0.2s transform linear;
`;

interface Props {
  text: string;
  onClick: () => void;
}

const FAB = ({ text, onClick }: Props) => {
  return <Container onClick={onClick}>{text}</Container>;
};

export default FAB;
