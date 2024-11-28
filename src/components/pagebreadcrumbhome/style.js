/* eslint-disable prettier/prettier */
import styled, { device, themeGet } from "@theme/utils";
import BreadcrumbBg from "../../data/images/bread/bg.jpg";
 

export const PageBreadcrumbWrap = styled.div`
    margin-bottom: 30px;
    background-image: url(${BreadcrumbBg});
    // border-radius:100px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
    .shape {
        position: absolute;
        z-index: 1;
    }
    
    ${device.large} {
    margin-bottom: 50px;
       
    }
        .page-breadcrumb-title {
    color: white;
    font-weight: bold;
    text-align: center;
    font-size: 20px;

    // For laptops (adjust based on your breakpoint)
    @media (min-width: 1024px) {
        font-size: 50px;
    }
}

`;

export const PageTitleContent = styled.div`
    text-align: center;
    .breadcrumb__title {
        color: #fff;
        font-weight: 700;
        line-height: 1.545;
        font-size: 35px;
        font-family: ${themeGet("fonts.heading")};
        ${device.large} {
            font-size: 55px;
        }
    }
    & .breadcrumb {
        display: flex;
        flex-wrap: wrap;
        padding: 0 0;
        margin-bottom: 1rem;
        list-style: none;
        justify-content: center;
        ol {
            padding-left: 0;
            list-style: none;
            display: flex;
            align-items: center;
            color: #fff;

            & .breadcrumb__separator {
                margin-right: 10px;
                margin-left: 10px;
            }
            .breadcrumb__link {
                color: #fff;
                font-size: 15px;
                font-weight: 500;
                margin-bottom: 8px;
                &.breadcrumb__link__active,
                &[aria-current="page"] {
                    font-weight: 900;
                    background: ${themeGet("colors.gradient")};
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
        }
    }
`;

export const BrandBox = styled.div`
    margin-top: 30px;
    
    padding: 10px 10px 10px;
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