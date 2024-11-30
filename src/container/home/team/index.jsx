/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { Container } from "react-bootstrap";
import Swiper, { SwiperSlide } from "@components/shared/swiper"; // Ensure Swiper is imported
import TeamMember from "../../../components/team";
import SectionTitle from "../../../components/title";
import { TeamSection } from "./style";

const TeamArea = ({ data }) => {
    console.log("copy",data)
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
                                <span style={{ fontSize: "0.5em" }}>Official training partner of</span>
                                <br />
                                <span style={{ fontSize: "0.8em" }}>Delaware Junior Chess Team</span>
                            </div>
                        }
                        {...data.section_title}
                    />
                )}
                <Swiper
                    layout={{
                        nav: "team-navigation",
                        dots: "team-dots-style",
                    }}
                    navigation={{
                        nextEl: ".team-slider-button-next",
                        prevEl: ".team-slider-button-prev",
                    }}
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        992: { slidesPerView: 4 },
                    }}
                >
                    {data?.items &&
                        data.items.map((item, i) => (
                            <SwiperSlide key={i}>
                                <TeamMember
                                    title={item.headings?.[0]?.content || "Default Title"}
                                    level={item.headings?.[0]?.level || ""}
                                    teamImage={item.images?.[0]?.src || ""}
                                    designation={item.designation || "Team Member"}
                                    socials={item.socials || []}
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </Container>
        </TeamSection>
    );
};

TeamArea.propTypes = {
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

export default TeamArea;
