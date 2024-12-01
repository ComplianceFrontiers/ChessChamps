import styled, { themeGet, device } from "@theme/utils";

export const BlogDetailsArea = styled.section`
    padding: 0px 0;
    ${device.medium} {
        padding: 0px 0;
    }
    ${device.large} {
        padding: 0px 0;
    }
    ${device.xlarge} {
        padding: 0px 0;
    }
`;

export const PostDetailsContentWrap = styled.div`
    ${device.large} {
        padding-left: 2.1875rem;
    }
`;
export const Title = styled.h3``;
export const PostDetailsBody = styled.div``;

export const Thumb = styled.div`
    margin-bottom: 30px;
    img {
        border-radius: 15px;
    }
    ${device.large} {
        margin-bottom: 40px;
    }
`;

export const SocialShareCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #f7faff;
    padding: 30px;
    margin-bottom: 45px;
    border-radius: 15px;
    justify-content: space-between;
    ul {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: -15px;
        margin-left: -15px;
    }
    .social-share-item {
        margin-bottom: 15px;
        margin-left: 15px;
        text-align: center;
        padding: 20px;
        background-color: white;
        border-radius: 12px;
        i {
            display: block;
            color: #102a45;
            font-size: 20px;
            margin-bottom: 10px;
        }
    }
    .social-share-wrap {
        display: inline-block;
        color: #102a45;
        font-weight: 700;
        line-height: 1;
        margin-right: 10px;
        font-size: 15px;
    }
`;
export const SingleBlogContent = styled.div`
    margin-top: 20px;
    h4 {
        margin-left: 20px; /* Indent headers */
    }

    ul {
        margin-left: 20px; /* Indent unordered lists */
    }

    li {
        margin-left: 15px; /* Indent list items slightly */
    }
`;
export const Aside = styled.aside``;

export const MetaBox = styled.div`
    .meta-title {
        font-weight: bold;
        margin-right: 10px;
        color: #102a45;
        font-size: 14px;
    }
`;
export const Content = styled.div`
    blockquote {
        p {
            font-style: italic;
            background: #f7faff;
            padding: 20px;
        }
    }
`;
export const CommentArea = styled.div`
    margin-top: 30px;
`;
export const CommentTitle = styled.h4``;

export const BottomImages = styled.div`
    display: flex;
    justify-content: space-between; /* Add space between images */
    align-items: center;
    margin-top: 20px;
    flex-wrap: wrap; /* Allow images to wrap on smaller screens */

    img {
        width: 300px;
        height: auto;
        border-radius: 8px;
        margin: 0 10px; /* Add spacing between images */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;

       

    /* Mobile view adjustments */
    @media (max-width: 768px) {
        justify-content: center; /* Center the images on small screens */
    }
`;
