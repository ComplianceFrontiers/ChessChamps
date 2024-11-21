/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable prettier/prettier */
/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import vedio from "../../../assets/vedios/mpesvedio.mp4"; // Adjust the path if necessary

const Hero = () => {
    return (
            <video width="100%" height="auto" autoPlay muted controls>
                <source src={vedio} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
    );
};

Hero.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(
            PropTypes.shape({
                level: PropTypes.string,
                content: PropTypes.string,
            })
        ),
        texts: PropTypes.arrayOf(
            PropTypes.shape({
                content: PropTypes.string,
            })
        ),
        buttons: PropTypes.arrayOf(
            PropTypes.shape({
                content: PropTypes.string,
            })
        ),
        images: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]).isRequired,
                alt: PropTypes.string,
            })
        ),
    }),
};

export default Hero;
