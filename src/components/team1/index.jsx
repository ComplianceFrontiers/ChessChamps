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

// Import images community images changed here
import image1 from "../../data/images/online/community1.png";
import image2 from "../../data/images/online/community2.png";
import image3 from "../../data/images/online/community3.png";
import image4 from "../../data/images/online/community4.png";
import image5 from "../../data/images/online/community5.png";
import image6 from "../../data/images/online/community6.png";

const TeamMember = ({ title, designation, socials, level }) => {
    // Determine the image based on the title
    let teamImage;

    switch (title) {
        case "Thanvish Reddy":
            teamImage = image1;
            break;
        case "Bill Truemam":
            teamImage = image2;
            break;
        case "Jatin Joshi":
            teamImage = image3;
            break;
        case "Siddharth Bose":
            teamImage = image4;
            break;
        default:
            teamImage = image1;  // Fallback to image1 if no match
    }

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

TeamMember.propTypes = {
    title: PropTypes.string.isRequired,
    level: PropTypes.string,
    designation: PropTypes.string,
    socials: PropTypes.array,
};

export default TeamMember;
