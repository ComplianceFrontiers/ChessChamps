/* eslint-disable prettier/prettier */
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
    margin-top: 20px;
    background-position: bottom center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 100px 0px 95px;

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

    /* Responsive styles */
    @media (max-width: 768px) {
        padding: 60px 0px 50px;

        .image-wrapper {
            max-width: 120px; /* Reduce size for smaller devices */
        }

        .image-container {
            gap: 15px; /* Reduce space between images */
        }
    }

    @media (max-width: 480px) {
        padding: 40px 0px 30px;

        .image-wrapper {
            max-width: 100px; /* Further reduce size for very small devices */
        }

        .image-container {
            gap: 10px; /* Further reduce space between images */
        }
    }
`;

