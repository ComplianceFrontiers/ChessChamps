/* eslint-disable prettier/prettier */
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    BlogCardBox,
    BlogThumb,
    TitleBox, // Add a styled component for the title box
    Title,
} from "./style";

const BlogCard = ({ variant, title, slug, image }) => {
    return (
        <BlogCardBox variant={variant}>
            <BlogThumb className="blog-thumb">
                <Link to={`/${slug}`}>
                    <GatsbyImage image={getImage(image)} alt={title} />
                </Link>
            </BlogThumb>
            {/* Title Box */}
            <TitleBox className="title-box">
                <Title>{title}</Title>
            </TitleBox>
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
