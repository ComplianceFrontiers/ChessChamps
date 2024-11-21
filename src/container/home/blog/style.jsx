/* eslint-disable prettier/prettier */
import styled from "@theme/utils";
import blogSectionBg from "../../../data/images/blog/bg.png";

export const LatestBlogSection = styled.section`
    padding: 145px 0;
    background: #f7faff;
    background-image: url(${blogSectionBg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    /* Example for responsive design, you can modify these breakpoints as needed */
    /* Add mobile responsiveness for the padding */
    @media (max-width: 768px) {
        padding: 80px 0;
    }
`;

export const BlogThumb = styled.div`
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 20px;

    img {
        width: 100%; /* Ensures the image scales horizontally */
        height: auto; /* Maintain aspect ratio */
        object-fit: cover; /* Ensures images are cropped to fill */
        border-radius: 8px; /* Optional, for rounded corners */
    }
`;

export const BlogThumb1 = styled.div`
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 20px;

    img {
        width: 63%; /* Ensures the image scales horizontally */
        height: 60%; /* Maintain aspect ratio */
        object-fit: cover; /* Ensures images are cropped to fill */
        border-radius: 8px; /* Optional, for rounded corners */
    }
`;