/* eslint-disable prettier/prettier */
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { BrandSingleItem} from "./style";
const SingleBrand = ({ brnadAffterImage, alt }) => {
    const image1 = getImage(brnadAffterImage);
    return (
        <BrandSingleItem href="/">
                <GatsbyImage image={image1} alt={alt} />
        </BrandSingleItem>
    );
};
SingleBrand.propTypes = {
    brnadAffterImage: PropTypes.object,
    brnadBeforeImage: PropTypes.object,
    alt: PropTypes.string,
};
export default SingleBrand;
