/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import {
    SingleTeam,
    Thumb,
    TeamContent,
    Title,
    Designation,
    TeamSocial,
    TeamSocialItem,
    TeamSocialLink,
} from "./style";

// Import images
import image1 from "../../data/images/blog/chessclubgallery/IMG_3031.png";
import image2 from "../../data/images/blog/chessclubgallery/IMG_3032.png";
import image3 from "../../data/images/blog/chessclubgallery/IMG_3033.png";
import image4 from "../../data/images/blog/chessclubgallery/IMG_3034.png";
import image5 from "../../data/images/blog/chessclubgallery/IMG_3035.png";
import image6 from "../../data/images/blog/chessclubgallery/IMG_3036.png";
import image7 from "../../data/images/blog/chessclubgallery/IMG_3037.png";
import image8 from "../../data/images/blog/chessclubgallery/IMG_3038.png";
import image9 from "../../data/images/blog/chessclubgallery/IMG_3039.png";
import image10 from "../../data/images/blog/chessclubgallery/IMG_3040.png";
import image11 from "../../data/images/blog/chessclubgallery/IMG_3041.png";
import image12 from "../../data/images/blog/chessclubgallery/IMG_3042.png";
import image13 from "../../data/images/blog/chessclubgallery/IMG_3043.png";
import image14 from "../../data/images/blog/chessclubgallery/IMG_3044.png";
import image15 from "../../data/images/blog/chessclubgallery/IMG_3045.png";
import image16 from "../../data/images/blog/chessclubgallery/IMG_3046.png";
import image17 from "../../data/images/blog/chessclubgallery/IMG_3047.png";
import image18 from "../../data/images/blog/chessclubgallery/IMG_3048.png";
import image19 from "../../data/images/blog/chessclubgallery/IMG_3049.png";
import image20 from "../../data/images/blog/chessclubgallery/IMG_3050.png";
// Add more images as needed...

// Map titles to images
const titleToImageMap = {
    "Thanvish Reddy5": image1,
    "Thanvish Reddy1": image11,
    "Thanvish Reddy2": image12,
    "Bill Truemam6": image2,
    "Bill Truemam3": image13,
    "Bill Truemam": image14,
    "Jatin Joshi7": image3,
    "Jatin Joshi4": image15,
    "Jatin Joshi": image3,
    "Siddharth Bose": image4,
    "31": image5,
    "32": image6,
    "33": image7,
    "34": image8,
    "35": image20,
    "36": image10,
    "37": image16,
    "38": image17,
    "39": image18,
    "40": image19,
    "41": image20,
};

const TeamMember3 = ({ title, designation, socials, level }) => {
    // Get the image based on the title or default to a fallback
    const teamImage = titleToImageMap[title] || image1;

    console.log("tttttttttt", title);

    return (
        <SingleTeam>
            <Thumb>
                {/* Use the <img> tag for the team image */}
                <img src={teamImage} alt={title} />
                <div className="social-hover">
                    {/* Use the <img> tag for the hover image */}
                    <img
                        src="../../data/images/team/team-hover.png"
                        alt={title}
                    />
                </div>
            </Thumb>
        </SingleTeam>
    );
};

TeamMember3.propTypes = {
    title: PropTypes.string.isRequired,
    level: PropTypes.string,
    designation: PropTypes.string,
    socials: PropTypes.array,
};

export default TeamMember3;
