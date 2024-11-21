import styled, { device } from "@theme/utils";
export const NewsLetterBox = styled.div`
    max-width: 970px;
    margin: 0 auto;
    position: relative;
`;
export const Form = styled.form`
    .btn-absolute {
        margin-top: 20px;
    }
    ${device.small} {
        .btn-absolute {
            position: absolute;
            top: 9px;
            right: 10px;
            margin-top: 0px;
        }
    }
`;
export const Input = styled.input`
    background-color: #ffffff;
    height: 70px;
    border: 1px solid #1b2979;
    padding-left: 30px;
    padding-right: 200px;
    border-radius: 8px;
    font-size: 14px;
    color: #000;
    &: focus {
        background-color: #ffffff;
    }
    &::placeholder {
        color: black;
    }
    ${device.medium} {
        height: 75px;
    }
`;
