/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { SingleTeam, Thumb } from "./style";

const TeamMember3 = ({ title }) => {
  let teamImage;

  // Hardcode image selection based on title
  switch (title) {
    case "Thanvish Reddy5":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3031.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    case "Thanvish Reddy1":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3041.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    case "Thanvish Reddy2":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3042.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    case "Bill Truemam6":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3032.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    case "Bill Truemam3":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3043.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    case "Bill Truemam":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3044.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    case "Jatin Joshi7":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3033.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    case "Jatin Joshi4":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3045.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    case "Jatin Joshi":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3033.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    case "Siddharth Bose":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3034.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    case "31":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3035.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    case "32":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3036.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    case "33":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3037.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    case "34":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3038.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    case "35":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3050.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    case "36":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3040.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    case "37":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3046.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    case "38":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3047.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    case "39":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3048.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    case "40":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3049.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    case "41":
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3050.png"
          alt={title}
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
    default:
      teamImage = (
        <StaticImage
          src="../../data/images/blog/chessclubgallery/IMG_3031.png"
          alt={title}
          placeholder="blurred"
        //   layout="constrained"
          width={500}
          height={500}
        />
      );
      break;
  }

  return (
    <SingleTeam>
      <Thumb>{teamImage}</Thumb>
    </SingleTeam>
  );
};

TeamMember3.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TeamMember3;
