/* eslint-disable prettier/prettier */
import styled, { css, device, themeGet } from "@theme/utils";

export const HeaderWrap = styled.header`
    position: relative;
`;
export const HeaderBottomArea = styled.div`
    position: relative;
    ${({ isSticky }) =>
        isSticky &&
        css`
            position: sticky;
            top: 0;
            width: 100%;
            z-index: 999;
            background: #fff;
            box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
        `};
`;
export const VideoWrapper = styled.div`
    position: relative;
    width: 100%;
    video {
        width: 100%;
        height: auto;
    }
`;

export const VideoHeaderOverlay = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1; /* Ensure it appears above the video */
    color: #fff;
    align-items: center;
    justify-content: space-between;
`;

export const ManimenuWrap = styled.div`

    font-size: 19px; /* Adjust as needed */
    a {
        font-size: inherit; /* Ensure links inherit the font size */
        text-decoration: none;
        // color: #000; /* Adjust color if needed */
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Menu = styled.div`
    color:#fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
// Mobile Menu Icon UI
export const MobileMenuBtn = styled.button`
    border: none;
    text-align: center;
    padding: 0px !important;
    width: 50px;
    height: 50px;
    z-index: 3;
    margin-left: 30px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${device.large} {
        display: none;
    }
    .line {
        position: relative;
        display: block;
        width: 25px;
        height: 2px;
        background: #000;
        margin-left: auto;
        margin-right: auto;
        transition: all 0.3s;
        & + .line {
            margin-top: 4px;
        }
    }
    &:hover {
        .line {
            &:nth-of-type(1) {
                transform: rotate(45deg);
                top: 7px;
            }
            &:nth-of-type(2) {
                opacity: 0;
                visibility: hidden;
            }
            &:nth-of-type(3) {
                transform: rotate(-46deg);
                bottom: 5px;
            }
        }
    }
`;
