/* eslint-disable prettier/prettier */
import styled from "@theme/utils";

export const NewsLetterBox = styled.div`
    max-width: 500px;
    margin: 0 auto;
    position: relative;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: row; /* Default for larger screens */
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 10px; /* Add some spacing between input and button */

    .btn-absolute {
        margin-top: 20px;
    }

    /* Mobile Styles */
    @media (max-width: 768px) {
        flex-direction: column; /* Stack input and button vertically */
        align-items: center; /* Center align items */
    }
`;

export const Input = styled.input`
    background-color: #ffffff;
    height: 60px;
    margin-top: 20px;
    border: 1px solid #1b2979;
    border-radius: 8px;
    font-size: 14px;
    color: #000;

    &:focus {
        background-color: #ffffff;
    }

    &::placeholder {
        color: black;
    }

    /* Mobile Styles */
    @media (max-width: 768px) {
        width: 100%; /* Take full width on mobile */
    }
`;
