import styled, { device } from "@theme/utils";

export const FormWrapper = styled.div`
    background-color: #f7faff;
    padding: 40px;
    max-width: 600px;
    margin: 50px auto;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Input = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;

    &:focus {
        border-color: #007bff;
    }
`;

export const Button = styled.button`
    padding: 12px;
    font-size: 16px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

export const RedirectButton = styled(Button)`
    background-color: #25d366;
    color: #ffffff; /* Ensure text color is visible */
    text-align: center; /* Center the text */
    font-weight: bold; /* Optional for better emphasis */
    padding: 10px 20px; /* Adjust padding as needed */
    border-radius: 5px; /* Optional for rounded edges */

    &:hover {
        background-color: #1da851;
    }
`;
