/* eslint-disable prettier/prettier */
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const popUp = keyframes`
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const PopupBox = styled.div`
  // background: #fff;
  border-radius: 16px;
  // padding: 25px 20px;
  text-align: center;
  position: relative;
  // width: 90%;
  max-width: 500px;
  // box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  animation: ${popUp} 0.4s ease-in-out;
  transition: transform 0.3s ease;

  @media (max-width: 480px) {
    // padding: 20px 15px;
  }
`;

export const PopupImage = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 15px;
  object-fit: cover;
`;

export const PopupContent = styled.div`
  h3 {
    margin: 12px 0;
    color: #333;
    font-size: 1.2rem;
    line-height: 1.4;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 15px;
  background: white;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #555;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: #000;
    transform: scale(1.2);
  }
`;
