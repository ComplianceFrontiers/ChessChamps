/* eslint-disable prettier/prettier */
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

    // Determine if it's Chess Store
    const isChessStore = title === "Chess Store";
    const buttonText = isChessStore ? "Visit" : "Read More";
    const buttonPath = isChessStore
        ? "https://chesschamps.academy/"
        : `/${slug}`;

    return (
        <BlogGridCard>
            {/* Thumbnail */}
            <Link
                to={isChessStore ? "https://chesschamps.academy/" : `/${slug}`}
                className="blog-grid-thumb"
                target={isChessStore ? "_blank" : "_self"}
                rel={isChessStore ? "noopener noreferrer" : undefined}
            >
                <GatsbyImage image={image} alt={title} />
            </Link>

            {/* Show BlogGridContent only if not Chess Store */}
            {!isChessStore && (
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
            )}

            {/* For Chess Store, show only button */}
            {isChessStore && (
                <div style={{ textAlign: "center", marginTop: "15px" }}>
                    <Button
                        size="medium"
                        path={buttonPath}
                        shape="rounded5"
                        target="_blank"
                    >
                        {buttonText}
                    </Button>
                </div>
            )}
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
