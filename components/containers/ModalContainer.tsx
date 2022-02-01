import React, { useRef } from "react";
import styled from "styled-components";

const Container = styled.button`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  max-width: 680px;
  box-sizing: border-box;
  margin: auto;
  padding: 180px 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 10px 10px 20px 0 rgba(0, 20, 40, 0.2);
`;

interface Props {
  closeModal: () => void;
}

const ModalContainer = ({ closeModal }: Props) => {
  const container = useRef(null);
  const handleMoalClose = (e: React.MouseEvent) => {
    if (e.target === container.current) {
      closeModal();
    }
  };

  return (
    <Container onClick={handleMoalClose} ref={container}>
      <ModalContent />
    </Container>
  );
};

export default ModalContainer;
