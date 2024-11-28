import PropTypes from "prop-types";
import { Accordion } from "react-bootstrap";
import { FaqListItem } from "./style";
import { StaticImage } from "gatsby-plugin-image";

const FaqList = ({ numberItem, title, imageSrc, description }) => {
    console.log(title, imageSrc);

    return (
        <FaqListItem>
            <Accordion.Item eventKey={`${numberItem}`}>
                <Accordion.Header>
                    {/* Display the image using StaticImage */}
                    <StaticImage
                        src={imageSrc} // The path to the static image
                        alt={`Image for ${title}`}
                        style={{ width: "50px", height: "50px", marginRight: "10px" }}
                    />
                    <span>
                        {numberItem}. {title}
                    </span>
                </Accordion.Header>
                <Accordion.Body>
                    <p>{description}</p>
                </Accordion.Body>
            </Accordion.Item>
        </FaqListItem>
    );
};

FaqList.propTypes = {
    title: PropTypes.string,
    numberItem: PropTypes.number,
    description: PropTypes.string,
    imageSrc: PropTypes.string.isRequired, // Ensure it's a string path for StaticImage
};

export default FaqList;
