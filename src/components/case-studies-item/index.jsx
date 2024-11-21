/* eslint-disable prettier/prettier */
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { CaseCard, Thumb, CaseCardContent, Title, Desination } from "./style";
const CaseStudiesItem = ({ title, thumbImg, category, slug }) => {
    const image = getImage(thumbImg);
    return (
            // <Thumb>
                <Link to={`/case-studies/${slug}`}>
                    <GatsbyImage
                        className="case-shap"
                        image={image}
                        alt={title}
                    />
                </Link>
            // </Thumb>
    );
};
CaseStudiesItem.propTypes = {
    slug: PropTypes.string,
    title: PropTypes.string,
    thumbImg: PropTypes.object,
    category: PropTypes.string,
};
export default CaseStudiesItem;
