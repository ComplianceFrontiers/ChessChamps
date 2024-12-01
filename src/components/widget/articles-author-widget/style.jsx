import styled, { device, themeGet } from "@theme/utils";

export const WidgetAuthor = styled.div`
    background-color: #f7faff;
    padding: 30px;
    margin-bottom: 60px;
    border-radius: 15px;
    text-align: center;
    ${device.large} {
        padding: 50px;
    }
    .author-image {
        margin-bottom: 20px;
        border-radius: 50%;
        border: 3px solid #ddd;
    }
`;

export const Title = styled.h5`
    text-transform: capitalize;
    font-weight: 700;
    color: #102a45;
    line-height: 1.25;
    font-size: 22px; /* Increased font size */
    margin-bottom: 10px; /* Adjusted spacing */
`;

export const Description = styled.p`
    font-weight: 600; /* Slightly reduced font weight for better readability */
    color: #6a6a6a; /* Updated color for better contrast */
    text-transform: none; /* Changed to none for readability */
    font-size: 14px; /* Slightly increased font size */
    margin-bottom: 30px; /* Adjusted spacing */
`;

export const Socials = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px; /* Added spacing below socials */
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: white;
        box-shadow: 0px 15px 30px 0px rgb(2 18 106 / 5%);
        color: #102a45;
        width: 50px;
        height: 50px;
        line-height: 50px;
        border-radius: 50%;
        margin: 0 10px; /* Increased margin for spacing */
        transition: all 0.3s ease; /* Added transition for smoother hover effect */
        &:hover {
            background-image: ${themeGet("colors.gradient")};
            color: #fff;
            transform: translateY(-5px); /* Added lift effect on hover */
        }
    }
`;

export const AuthorButton = styled.button`
    display: inline-block;
    padding: 12px 25px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    margin-top: 15px; /* Spacing above the button */
    &:hover {
        background-color: #0056b3;
        transform: translateY(-3px); /* Added lift effect on hover */
    }
    &:active {
        transform: translateY(0); /* Return to default on click */
    }
`;
