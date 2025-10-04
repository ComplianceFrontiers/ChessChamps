/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";
import {
    TitleBox,
    SubTitle,
    Title,
    ShortDec,
    DividerBar,
    showSubTitle,
} from "./style";
const SectionTitleTwo = ({
    subTitle,
    title,
    shortDec,
    showShortDec,
    showSubTitle,
    dividerBg,
}) => {
    const variantdata = {
        showShortDec: showShortDec || false,
        dividerBg: dividerBg || "secondary",
        showSubTitle: showSubTitle || false,
    };
    const d1 = `
    Founded by <strong> Siddharth Bose (Sid)</strong>, a passionate middle-schooler, <strong> Chess Champs </strong> started as a small chess club in Delaware in January 2024 with just 11 members. The goal was to create a safe and engaging environment for kids to learn and enjoy chess, starting with the community outreach initiative <strong>‘Chess for Kids.‘ </strong> Since then, we’ve grown into a thriving community of over <strong>350 members.</strong> Our programs now encompass comprehensive chess training, afterschool activities, and tournaments spanning multiple states. Our mission remains simple yet impactful: to empower young minds through the game of chess.
`;
 

return (
  <TitleBox>
      {variantdata.showSubTitle && <SubTitle>{subTitle}</SubTitle>}
      <Title>{title}</Title>
      {variantdata.showShortDec && (
          <ShortDec dangerouslySetInnerHTML={{ __html: d1 }}></ShortDec>
      )}
      {variantdata.dividerBg && (
          <DividerBar dividerBg={variantdata.dividerBg}></DividerBar>
      )}
  </TitleBox>
);

};
SectionTitleTwo.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    shortDec: PropTypes.string,
    showSubTitle: PropTypes.bool,
    showShortDec: PropTypes.bool,
    dividerBg: PropTypes.oneOf(["primary", "secondary"]),
};
export default SectionTitleTwo;
