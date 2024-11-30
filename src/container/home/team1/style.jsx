/* eslint-disable prettier/prettier */
import styled, { device } from "@theme/utils";
import BeforeImge from "../../../data/images/team/shape-bottom.png";
import AfterImge from "../../../data/images/team/shape-top.png";
export const TeamSection = styled.section`
margin-top:150px;
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
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: auto; /* Maintain the natural width */
        height: auto; /* Maintain the natural height */
       

    @media (max-width: 480px) { /* For even smaller devices */
    transform: translate(-50%, -50%);    
    top: -10%;
    width: 40%; /* Adjust width as needed */
        height: 50%; /* Maintain aspect ratio */
    }
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
        margin-top: 20px;
    }

    .shop-now-button {
        background-color: #9f8460;
        color: #fff;
        font-size: 16px;
        width: 160px;
        height: 50px;
        padding: 10px 20px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease, transform 0.2s ease;

        &:hover {
            background-color: #feb423;
            transform: scale(1.05);
        }
    }
`;

