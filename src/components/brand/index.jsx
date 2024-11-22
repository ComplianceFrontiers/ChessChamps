/* eslint-disable prettier/prettier */
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { BrandSingleItem, BrandItem } from "./style";
const SingleBrand = ({ brnadBeforeImage, alt }) => {
    const image1 = getImage(brnadAffterImage);
     return (
        <BrandSingleItem href="/">
            <BrandItem className="brandBefore">
                <GatsbyImage image={image1} alt={alt} />
            </BrandItem>
        </BrandSingleItem>
    );
};
SingleBrand.propTypes = {
    brnadBeforeImage: PropTypes.object,
    alt: PropTypes.string,
};
export default SingleBrand;
