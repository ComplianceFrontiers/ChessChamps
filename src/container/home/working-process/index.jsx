/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import SectionTitle from "../../../components/title";
import { WorkingProcessSection } from "./style";
import Swiper, { SwiperSlide } from "@components/shared/swiper";
import SingleBrand from "../../../components/brand";

const WorkingProcessArea = ({ data }) => {
    return (
        <WorkingProcessSection>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        headingTitle={data?.section_title.title}
                        {...data.section_title}
                    />
                )}
                 <Swiper
                                layout={{
                                    nav: "brand-navigation",
                                    dots: "brand-dots-style",
                                }}
                                navigation={{
                                    nextEl: ".brand-slider-button-next",
                                    prevEl: ".brand-slider-button-prev",
                                }}
                                slidesPerView={3}
                                spaceBetween={0}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    480: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                {data?.items &&
                                    data?.items?.map((item, i) => {
                                        return (
                                            <SwiperSlide key={i}>
                                                <SingleBrand
                                                    brnadAffterImage={
                                                        item.images?.[0].src
                                                    }
                                                    brnadBeforeImage={
                                                        item.images?.[1].src
                                                    }
                                                    alt={item.images?.[0].alt}
                                                />
                                            </SwiperSlide>
                                        );
                                    })}
                            </Swiper>
            </Container>
        </WorkingProcessSection>
    );
};

WorkingProcessArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            title: PropTypes.string,
            icon: PropTypes.shape({
                src: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
                alt: PropTypes.string,
            }),
        }),
        headings: PropTypes.arrayOf(
            PropTypes.shape({
                level: PropTypes.string,
                content: PropTypes.string,
            })
        ),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                fields: PropTypes.shape({
                    slug: PropTypes.string,
                }),
                images: PropTypes.arrayOf(
                    PropTypes.shape({
                        src: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
                        alt: PropTypes.string,
                    })
                ),
            })
        ),
    }),
};

export default WorkingProcessArea;
