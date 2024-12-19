import styled, { device } from "@theme/utils";

export const CaseStudiesSection = styled.section`
    padding: 10px 0 60px;  

    .show-more-buttons {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-bottom: 30px; /* Add space below the buttons */
    }

    .show-more-buttons button {
        background-color: #007bff; /* Set a background color */
        color: #fff; /* Set text color */
        border: none;
        padding: 10px 20px; /* Add padding */
        font-size: 16px; /* Font size */
        cursor: pointer;
        border-radius: 5px; /* Rounded corners */
        transition: background-color 0.3s ease, transform 0.2s ease; /* Add transition for hover effect */
    }

    .show-more-buttons button:hover {
        background-color: #0056b3; /* Darker background color on hover */
        transform: translateY(-2px); /* Lift the button up on hover */
    }

    ${device.large} {
        padding: 10px 0 90px;
    }
`;
