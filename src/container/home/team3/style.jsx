/* eslint-disable prettier/prettier */
import styled, { device } from "@theme/utils";
import BeforeImge from "../../../data/images/team/shape-bottom.png";
import AfterImge from "../../../data/images/team/shape-top.png";
export const TeamSection = styled.section`
    padding: 30px 0px;
    ${device.medium} {
        padding: 50px 0px;
    }
    ${device.large} {
        padding: 50px 0px;
    }
    ${device.xlarge} {
        padding: 150px 0px;
    }
    position: relative;
    background-image: linear-gradient(
        to right,
        #102a45,
        #102a45,
        #102a45,
       #102a45,
        #102a45
    );
    background-position: left center;
    background-repeat: no-repeat;
    background-size: cover;
    .pattern {
        position: absolute !important;
        top: 0;
        left: 0;
        width: 100%;
    }
    &::before {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0;
        content: "";
        background-image: url(${BeforeImge});
        background-position: left center;
        background-repeat: no-repeat;
        background-size: cover;
        padding-bottom: 11%;
    }
`;
