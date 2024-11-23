/* eslint-disable prettier/prettier */
import styled, { device, themeGet } from "@theme/utils";
import BrandBg from "../../../data/images/brand-logo/bg.png";

export const BrandSection = styled.section``;

export const BrandTitle = styled.h6`
    text-align: center;
    color: #fff;
    margin-bottom: 30px;
    margin-top: 80px;
    span {
        font-weight: 900;
        line-height: 2.428;
        font-size: 35px;
        background: ${themeGet("colors.gradient")};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const BrandBox = styled.div`
margin-top: 30px;
    background-color: #02126a;
    background-image: url(${BrandBg});
    padding: 20px 20px 20px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 35px;

    ${device.large} {
        padding: 20px 0px 0px;
    }
    
    .brand-stats {
    text-align: center;
    padding: 20px 0;

    .stat-item {
        position: relative;
        h2 {
            font-size: 2rem;
            font-weight: bold;
            color: #c6aa68; /* Gold color */
            // margin-bottom: 5px;
        }
        p {
            font-size: 1rem;
            font-weight: 600;
            text-transform: uppercase;
            color: #fff; /* White text for contrast */
        }

        &:not(:last-child)::after {
            content: "";
            position: absolute;
            top: 10%;
            right: 0;
            height: 80%;
            width: 1px;
            background-color: #fff; /* White divider line */
            opacity: 0.5; /* Optional: slightly transparent */
        }
    }

    ${device.medium} {
        .stat-item h2 {
            font-size: 5rem; /* Adjust for medium screens */
        }
        .stat-item p {
            font-size: 1.5rem;
        }
    }

    ${device.small} {
        .stat-item {
            &:not(:last-child)::after {
                display: none; /* Remove divider for small screens */
            }
            margin-bottom: 15px;
        }
    }
}


        .stat-item:last-child {
            border-right: none; /* Remove border for the last column */
        }

        ${device.medium} {
            .stat-item h2 {
                font-size: 5rem; /* Adjust for medium screens */
            }
            .stat-item p {
                font-size: 1.5rem;
            }
        }

        ${device.small} {
            .stat-item {
                border-right: none; /* Remove borders for small screens */
                margin-bottom: 15px;
            }
        }
    }
`;
