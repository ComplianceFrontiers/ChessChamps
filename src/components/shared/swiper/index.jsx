/* eslint-disable prettier/prettier */
import React from "react";
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectFade,
    Autoplay,  // Import Autoplay module
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import "swiper/css";

// Use the Autoplay module along with others
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);

const SwiperSlider = ({ children, layout, autoplayDelay = 3000, ...props }) => {
    const settings = {
        spaceBetween: 50,
        slidesPerView: 4,
        loop: true,
        centeredSlides: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: autoplayDelay,  // Time in ms between slide transitions (default: 3000ms)
            disableOnInteraction: false,  // Keep autoplay active after user interaction
        },
        ...props,
    };
    const { nav, dots } = layout;
    return (
        <div className={`swiper-main-wrapper ${nav} ${dots}`}>
            <Swiper {...settings}>{children}</Swiper>
        </div>
    );
};

export { SwiperSlide };

SwiperSlider.propTypes = {
    children: PropTypes.node.isRequired,
    layout: PropTypes.object,
    autoplayDelay: PropTypes.number, // Prop to control autoplay delay
};

export default SwiperSlider;
