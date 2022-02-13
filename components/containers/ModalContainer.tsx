import React, { useRef } from "react";

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
    <div className="w-full h-full flex fixed z-10 top-0 left-0 overflow-auto bg-black bg-opacity-40 cursor-pointer" onClick={handleMoalClose} ref={container}>
       <div className="box-border m-auto px-96 py-44 rounded-lg bg-white shadow-xl cursor-default"></div>
    </div>
  );
};

export default ModalContainer;
