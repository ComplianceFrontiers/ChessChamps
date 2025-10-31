/* eslint-disable prettier/prettier */

//temp commenting 2-5 min pop up email enter thing
import React, { useEffect, useState } from "react";
import {
  PopupOverlay,
  PopupBox,
  PopupImage,
  PopupContent,
  CloseBtn,
} from "./style.js"; // import styled components
import PopUpimage from '../../data/images/popup/popup.png' // Ensure the image is in the public/images directory
const PopupAfterLogin = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup 5 seconds after page load (after login)
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <PopupOverlay>
      <PopupBox>
        <CloseBtn onClick={handleClose}>✖</CloseBtn>
     
        <PopupImage
          src={PopUpimage} // put your image in /public/images
          alt="Welcome Popup"
        />
        
      </PopupBox>
    </PopupOverlay>
  );
};

export default PopupAfterLogin;
