/* eslint-disable prettier/prettier */
import styled, { device } from "@theme/utils";
export const CaseStudiesSection = styled.section`
    .button-wrapper {
        display: flex;
        justify-content: center;
        margin-top: 40px; // Adjust as needed
        margin-bottom: 50px;
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
    }
`;

export const CaseStudiesItemWrap = styled.div``;
