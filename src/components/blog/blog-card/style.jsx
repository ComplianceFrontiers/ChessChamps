/* eslint-disable prettier/prettier */
import styled, { themeGet, css, device } from "@theme/utils";
export const BlogCardBox = styled.div`
    margin-bottom: 30px;
    background-color: #fff;
    padding: 30px;
    border-radius: 15px;
    transition: all 0.3s ease-in-out;

    ${({ variant }) =>
        variant === "vertical" &&
        css`
            display: flex;
            flex-direction: column;
            .blog-thumb {
                max-width: 100%;
                margin-right: 0px;
                margin-bottom: 20px;
                img {
                    width: 100%; /* Ensures the image scales horizontally */
                    height: auto; /* Maintain aspect ratio */
                    object-fit: cover; /* Ensures images are cropped to fill */
                    border-radius: 8px; /* Optional, for rounded corners */
                }
            }
            ${device.small} {
                flex-direction: row;
                .blog-thumb {
                    max-width: 140px;
                    margin-right: 20px;
                    margin-bottom: 0;
                    img {
                        height: 100px; /* Set a consistent height for rectangular look */
                        object-fit: cover;
                    }
                }
            }
        `}
    

    &:hover {
        background-image: -webkit-linear-gradient(
            0deg,
            #02126a 0%,
            #2647c8 100%
        );
        .meta-hover {
            color: #fff;
            a {
                color: #fff;
            }
        }
        h5 {
            background: ${themeGet("colors.gradient")};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`;
 
export const BlogContent = styled.div``;
export const BlogMeta = styled.div`
    color: #f5f5f5;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 10px;
    font-size: 14px;
    position: relative;
    span {
        &:after {
            content: "/";
            padding: 0 5px;
        }
        &:last-of-type {
            &:after {
                display: none;
            }
        }
    }
`;
export const Author = styled.span``;
export const Date = styled.span``;
export const Category = styled.span`
    background: #007aff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

