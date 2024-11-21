/* eslint-disable prettier/prettier */
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    BlogCardBox,
    BlogThumb,
} from "./style";

const BlogCard = ({ variant, title, slug, image }) => {
    return (
        <BlogCardBox variant={variant}>
            <Link to={`/${slug}`}>
                <div className="blog-thumb">
                    <GatsbyImage image={getImage(image)} alt={title} />
                </div>
                </Link>
         
        </BlogCardBox>
    );
};


BlogCard.propTypes = {
    variant: PropTypes.oneOf(["vertical"]),
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    slug: PropTypes.string,
    image: PropTypes.object,
};

export default BlogCard;
