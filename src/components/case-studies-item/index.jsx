/* eslint-disable prettier/prettier */
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";

const CaseStudiesItem = ({ title, thumbImg, category, slug }) => {
    const image = getImage(thumbImg);

    return ( 
            <GatsbyImage
                className="case-shap"
                image={image}
                alt={title}
                style={{
                    borderRadius: "50px", // Add rounded edges
                }}
            /> 
    );
};

CaseStudiesItem.propTypes = {
    slug: PropTypes.string,
    title: PropTypes.string,
    thumbImg: PropTypes.object,
    category: PropTypes.string,
};

export default CaseStudiesItem;
