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
    const d1="Siddharth Bose (Sid), our founder and lead coach, discovered his passion for chess at age five in India, quickly achieving success in state and national tournaments. Nurtured by a vibrant chess ecosystem with access to clubs, coaching, and youth competitions, Sid flourished. However, after relocating to Delaware, he faced a significant lack of resources for young chess enthusiasts—coaching opportunities were scarce, and youth-focused programs were nonexistent. Determined to continue his journey, Sid traveled to neighboring states for quality chess education and playing opportunities, often being the only young participant in predominantly adult competitions. "

const d2="These challenges deepened his resolve to make chess accessible to Delaware’s youth. Recognizing its power to foster critical thinking, focus, and resilience, Sid was determined to bring the game to his community. A turning point came when a chance meeting with a Delaware senator connected him to Daniel Elkins, Executive Director of Bellevue Community Center. With their support, Sid founded Chess Champs in Delaware on January 11, 2024, starting with just 11 members." 



const d3="Since its inception, Chess Champs has grown into a vibrant 200-member community, serving Delaware, New Jersey, and Pennsylvania as a premier hub for youth chess. It provides club facilities, school programs, tournaments, and personalized coaching for young players. Under Sid’s visionary leadership, Chess Champs is poised to inspire and empower the next generation of thinkers and strategists."
    return (
        <TitleBox>
            {variantdata.showSubTitle && <SubTitle>{subTitle}</SubTitle>}
            <Title>{title}</Title>
            {variantdata.showShortDec && <ShortDec>{d1}</ShortDec>}
            {variantdata.showShortDec && <ShortDec>{d2}</ShortDec>}
            {variantdata.showShortDec && <ShortDec>{d3}</ShortDec>}

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
