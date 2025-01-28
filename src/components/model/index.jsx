/* eslint-disable prettier/prettier */
import React from 'react';
import { ModalOverlay, ModalContainer, CloseButton } from './style';
import image1 from "../../data/images/bg/tq.png"; // Corrected typo: 'iamge1' to 'image1'

const Model = ({ onClose }) => {
  const handleClose = () => {
    onClose(); // Trigger the onClose function passed as a prop
    window.location.reload(); // Refresh the page
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={handleClose}>X</CloseButton> {/* Ensure onClick triggers handleClose */}
        <img src={image1} alt="Displayed Image" />
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Model;
