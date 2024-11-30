import styled, { device } from "@theme/utils";
export const TestimonialItem = styled.div``;
export const ClientProfile = styled.div`
    margin-bottom: 45px;
    ${device.medium} {
        margin-bottom: 75px;
    }
`;
export const Quote = styled.span`
    font-weight: 700;
    line-height: 1;
    font-size: 190px;
    background: #9f8460;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    display: block;
    margin: 0 auto;
    z-index: 1;
`;
export const DescriptionText = styled.p`
    font-size: 16px;
    line-height: 1;
    margin-bottom: 40px;
    ${device.medium} {
        font-size: 20px;
    }
`;
export const ClientName = styled.h5``;
export const Designation = styled.span`
    color: #9f8460;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    margin-top: 5px;
    display: inline-block;
`;
