/* eslint-disable prettier/prettier */
import styled, { themeGet, device, keyframes } from "@theme/utils";


const offset = keyframes`
    0% {
        stroke-dashoffset: 800;
    }
    80% {
        stroke-dashoffset: 0;
    }
    100% {
        stroke-dashoffset: 0;
        fill: #2647c8;
    }
`;
const move = keyframes`
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }

    100% {
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
    }
`;
export const FooterWrap = styled.footer``;

// Footer Top Css
export const FooterTop = styled.div`
    padding: 20px 0px;
    position: relative;
    background: #102a45;
    .footer-bg-shape {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: fill;
        z-index: 0;
    }
    
    
 
    

     
`;

export const FooterRow = styled.div`
    display: flex;
    flex-wrap: wrap; // Ensures wrapping for smaller screens
    justify-content: space-between; // Align items with spacing
    align-items: center; // Vertically align items
    background: #102a45;
    border-radius: 15px;
    margin: 0;
    position: relative;

    ${device.large} {
        flex-wrap: nowrap; // Ensure single row on large screens
    }

    & > .FooterRow {
        // Target nested FooterRow
        display: flex;
        flex-wrap: nowrap; // Prevent wrapping for inner row
        gap: 16px; // Optional: Add spacing between items
        width: 100%; // Ensure full width
    }
`;

export const FooterCol = styled.div`
    width: 100%;
    ${device.small} {
        width: 50%;
    }
    ${device.large} {
        flex: 1 0;
        border-right: 1px solid #273581;
        &:nth-of-type(1) {
            max-width: 300px;
            flex: 1 0 100%;
        }
    }
    ${device.xlarge} {
        flex: 1 0;
        &:nth-of-type(1) {
            max-width: 390px;
            flex: 1 0 100%;
        }
    }
    &:last-child {
        border-right: 0px;
    }
`;
export const FooterWidget = styled.div`
    padding: 15px 15px 15px;
    ${device.medium} {
        padding: 50px 30px 0px 20px;
    }
    ${device.large} {
        padding: 50px 30px 40px 20px;
    }
    ${device.xlarge} {
        padding: 50px 30px 70px 50px;
    }
`;

// Footer Bottom Css
export const FooterBottom = styled.div`
    padding: 20px 0px;
    background: #102a45;
    position: relative;
`;
export const CopyrightText = styled.div`
    color: white;
    & > svg {
        width: 15px;
        height: 15px;
        path {
            fill: red;
        }
    }
    i {
        background: ${themeGet("colors.gradient")};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    a {
        font-weight: 900;
        background: ${themeGet("colors.gradient")};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    ${device.medium} {
        padding: 0;
    }
`;
