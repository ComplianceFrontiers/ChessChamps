import { Link } from "gatsby";
import PropTypes from "prop-types";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Button from "../../shared/button";
import {
    BlogGridCard,
    BlogGridContent,
    Title,
    Quote_text,
} from "./style";

const BlogCardTwo = ({ date, title, quote_text, slug, thume_image }) => {
    const image = getImage(thume_image);

    // Determine button text and path
    const isChessStore = title === "Chess Store";
    const buttonText = isChessStore ? "Shop Now" : "Read More";
    const buttonPath = isChessStore ? "/online-store" : `/${slug}`;

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
                    <Button size="medium" path={buttonPath} shape="rounded5">
                        {buttonText}
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
