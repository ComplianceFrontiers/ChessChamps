/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Button } from "react-bootstrap"; // Import Button from Bootstrap
import Swiper, { SwiperSlide } from "@components/shared/swiper"; // Ensure Swiper is imported
import TeamMember from "../../../components/team";
import SectionTitle from "../../../components/title";
import { TeamSection } from "./style";

const TeamArea1 = ({ data }) => {
    return (
        <TeamSection>
            <StaticImage
                className="pattern"
                src="../../../data/images/team/pattern.png"
                alt=""
            />
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        headingTitle={
                            <div>
                                <span style={{ fontSize: "0.8em" }}>
                                    Chess is more than a game; it’s a mental fitness regime, just like any sport or physical
                                    fitness program.
                                </span>
                                <br />
                                <span style={{ fontSize: "0.5em" }}>
                                    Chess is more than just a game; it’s a mental fitness regime, strengthening focus, strategy, and
                                    decision-making skills. Just like physical training shapes the body, chess hones the mind for
                                    life’s challenges.
                                </span>
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
