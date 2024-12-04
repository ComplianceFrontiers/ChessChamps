/* eslint-disable prettier/prettier */
import styled from "@theme/utils";

// Overlay for the modal, it darkens the background
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent dark background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensures it appears above other content */
`;

// Container for the modal content (image and close button)
export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

// Close button styling
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #fff;
  border: none;
  font-size: 20px;
  color: #000;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
