/* eslint-disable prettier/prettier */
/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import HeaderTopArea from "../../components/header-top";
import React, { Fragment, useState } from "react";
import { Container } from "react-bootstrap";
import Logo from "../../components/logo";
import MainMenu from "../../components/menu/main-menu";
import Button from "../../components/shared/button";
import MobileNavMenu from "../../components/menu/mobile-menu";
import vedio from "../../assets/vedios/mpesvedio.mp4";
import { useSticky } from "../../hooks";
import {
    VideoWrapper,
    HeaderWrap,
    HeaderBottomArea,
    ManimenuWrap,
    Menu,
    MobileMenuBtn,
    VideoHeaderOverlay,
} from "./style";

const Header = ({ data }) => {
    // Sticky Header
    const { sticky, headerRef, fixedRef } = useSticky();

    // OfCanvas Menu
    const [ofcanvasOpen, setOfcanvasOpen] = useState(false);

    // OfCanvas Menu Open & Remove
    const ofcanvasHandaler = () => {
        setOfcanvasOpen((prev) => !prev);
    };

    return (
<HeaderWrap ref={headerRef}>
    {/* <VideoWrapper> */}
        {/* Header Overlay Inside Video */}
        <VideoHeaderOverlay>
            <HeaderBottomArea ref={fixedRef} isSticky={sticky}>
                <Container className="container-max">
                    <ManimenuWrap>
                        <Logo />
                        <Menu>
                            <MainMenu allmenuData={data.menu} />
                            <Button
                                    sx={{
                                        ml: ["0px", "0px", "0px", "40px", "80px"],
                                        display: ["none", "block", "block"],
                                    }}
                                    size="large"
                                    shape="rounded10"
                                >
                                    <a 
                                        href="https://chess-in-school.vercel.app/portalhome" 
                                        style={{ textDecoration: "none", color: "#fff"}}
                                    >
                                        Chess Champs Academy
                                        <i className="icofont-arrow-right"></i>
                                    </a>
                                </Button>

                            <MobileMenuBtn
                                onClick={ofcanvasHandaler}
                                onKeyDown={ofcanvasHandaler}
                            >
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </MobileMenuBtn>
                            <MobileNavMenu
                                MobilemenuData={data.menu}
                                ofcanvasOpen={ofcanvasOpen}
                                ofcanvasHandaler={ofcanvasHandaler}
                            />
                        </Menu>
                    </ManimenuWrap>
                </Container>
            </HeaderBottomArea>
        </VideoHeaderOverlay>
 
    {/* </VideoWrapper> */}
</HeaderWrap>

    
    );
};

Header.propTypes = {
    data: PropTypes.shape({
        menu: PropTypes.arrayOf(PropTypes.shape({})),
    }),
};

export default Header;
