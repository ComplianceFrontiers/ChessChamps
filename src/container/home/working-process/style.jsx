import styled, { device, keyframes } from "@theme/utils";
import WorkingProcessSectionBg from "../../../data/images/working/bg.png";
import circleImage from "../../../data/images/working/circle.png";

const rotation = keyframes`
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
`;

export const WorkingProcessSection = styled.section`
    background-image: url(${WorkingProcessSectionBg});
    margin-top: 70px;
    background-position: bottom center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 130px 0px 115px;

    .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px; /* Space between images */
        flex-wrap: wrap; /* Allows images to wrap on smaller screens */
    }

    .image-wrapper {
        max-width: 150px; /* Adjust size as needed */
        text-align: center;
    }

    .working-process {
        .working-process-list {
            margin-bottom: 30px;
            position: relative;
            text-align: center;
        }
    }
`;
