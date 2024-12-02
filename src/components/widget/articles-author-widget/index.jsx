import { Link } from "gatsby";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { AuthorButton, WidgetAuthor, Title, Description, Socials } from "./style";

const Author = ({ author }) => {
    console.log("tring1", author.name);

    // Conditional logic for the button text and link
    const isCommunityOutreach = author.name === "Community Outreach";
    const buttonText = isCommunityOutreach ? "Visit Gallery" : "Register";
    const buttonLink = isCommunityOutreach
        ? "/case-studies"
        : "https://chess-club-frontend.vercel.app/signup";

    return (
        <WidgetAuthor>
            <GatsbyImage
                className="author-image"
                image={getImage(author.image?.src)}
                alt={author.name}
            />
            <Title>{author.name}</Title>
            <Description>{author.description}</Description>
            <Socials>
                {author.socials.map((item) => (
                    <Link key={item.id} to={item.link}>
                        <i className={item.icon}></i>
                    </Link>
                ))}
            </Socials>
            <Link to={buttonLink}>
                <AuthorButton>{buttonText}</AuthorButton>
            </Link>
        </WidgetAuthor>
    );
};

Author.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string,
        bio: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.shape({
            src: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
                .isRequired,
            alt: PropTypes.string,
        }),
        socials: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                icon: PropTypes.string,
                link: PropTypes.string,
            })
        ),
    }),
};

export default Author;
