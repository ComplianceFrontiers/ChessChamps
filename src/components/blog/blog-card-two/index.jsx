/* eslint-disable prettier/prettier */
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Button from "../../shared/button";
import {
    BlogGridCard,
    BlogGridContent,
    MetaTag,
    MetaDate,
    MetaComments,
    Comments,
    LinkShare,
    Title,
    DescriptionText,
    Quote_text
} from "./style";
const BlogCardTwo = ({ date, title, quote_text, slug, thume_image }) => {
    const image = getImage(thume_image);
    return (
        <BlogGridCard>
            <Link to={`/${slug}`} className="blog-grid-thumb">
                <GatsbyImage image={image} alt={title} />
            </Link>
            <BlogGridContent>
                <Title>
                    <Link to={`/${slug}`}>{title}</Link>
                </Title>
                <Quote_text>{quote_text}</Quote_text>
                <div style={{ textAlign: "center" }}>
    <Button size="medium" path={`/${slug}`} shape="rounded5">
        Read More
    </Button>
</div>

            </BlogGridContent>
        </BlogGridCard>
    );
};
BlogCardTwo.propTypes = {
    date: PropTypes.string,
    thume_image: PropTypes.object,
    title: PropTypes.string,
    quote_text: PropTypes.string,
    slug: PropTypes.string,
};

export default BlogCardTwo;
