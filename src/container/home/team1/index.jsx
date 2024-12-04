/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { Container } from "react-bootstrap"; // Import Container from Bootstrap
import { Link } from "gatsby"; // Import Link from Gatsby for navigation
import SectionTitle from "../../../components/title";
import { TeamSection } from "./style";

const TeamArea1 = ({ data }) => {
    return (
        <TeamSection>
            <StaticImage
                className="pattern"
                src="../../../data/images/team/pattern1.png"
                alt=""
            />
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        headingTitle={
                            <div style={{ textAlign: "center" }}>
                                <span style={{ fontSize: "0.8em" }}>
                                    Chess is more than a game; it’s a mental fitness regime, just like any sport or physical
                                    fitness program.
                                </span>
                                <br />
                                
                                {/* Wrap the button with Gatsby Link */}
                                <div className="button-wrapper">
                                    <Link to="/blog-grid">
                                        <button className="shop-now-button">Our Programs</button>
                                    </Link>
                                </div>
                            </div>
                        }
                        {...data.section_title}
                    />
                )}
            </Container>
        </TeamSection>
    );
};

TeamArea1.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            title: PropTypes.string,
            icon: PropTypes.shape({
                src: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]).isRequired,
                alt: PropTypes.string,
            }),
        }),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                headings: PropTypes.arrayOf(
                    PropTypes.shape({
                        content: PropTypes.string,
                        level: PropTypes.string,
                    })
                ),
                images: PropTypes.arrayOf(
                    PropTypes.shape({
                        src: PropTypes.string,
                    })
                ),
                designation: PropTypes.string,
                socials: PropTypes.arrayOf(
                    PropTypes.shape({
                        title: PropTypes.string,
                    })
                ),
            })
        ),
    }),
};

export default TeamArea1;
