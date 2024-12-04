/* eslint-disable prettier/prettier */
import React from 'react';
import { ModalOverlay, ModalContainer, CloseButton } from './style';
import iamge1 from "../../data/images/bg/tq.png"; // Corrected typo: 'iamge1' to 'image1'

const Model = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton> {/* Ensure onClick triggers onClose */}
        <img src={iamge1} alt="Displayed Image" />
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Model;
