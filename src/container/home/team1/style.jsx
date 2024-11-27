/* eslint-disable prettier/prettier */
import styled, { device } from "@theme/utils";
import BeforeImge from "../../../data/images/team/shape-bottom.png";
import AfterImge from "../../../data/images/team/shape-top.png";
export const TeamSection = styled.section`
    padding: 50px 0px;
    ${device.medium} {
        padding: 150px 0px;
    }
    ${device.large} {
        padding: 150px 0px;
    }
    ${device.xlarge} {
        padding: 150px 0px;
    }
    position: relative;
    background-image: linear-gradient(
        to right,
        #102a45,
        #102a45,
        #102a45,
        #102a45,
        #102a45
    );
    background-position: left center;
    background-repeat: no-repeat;
    background-size: cover;
    .pattern {
        position: absolute !important;
        top: 0;
        left: 0;
        width: 100%;
    }
    &::before {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0;
        content: "";
        background-image: url(${BeforeImge});
        background-position: left center;
        background-repeat: no-repeat;
        background-size: cover;
        padding-bottom: 11%;
    }
        .button-wrapper {
        display: flex;
        justify-content: center;
        margin-top: 20px; // Adjust as needed
    }

    .shop-now-button {
    background-color: #9f8460; /* Button background color */
    color: #fff; /* Text color */
    font-size: 16px; /* Text size */
    width: 160px; /* Explicit width */
    height: 50px; /* Explicit height */
    padding: 10px 20px; /* Adjust padding for internal spacing */
    border: none; /* No border */
    border-radius: 10px; /* Slightly more rounded corners */
    cursor: pointer; /* Pointer cursor on hover */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Button shadow for depth */
    transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth hover effect */

    &:hover {
        background-color: #feb423; /* Lighter background on hover */
        transform: scale(1.05); /* Slightly enlarge button on hover */
    }
`;
