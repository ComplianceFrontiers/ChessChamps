/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import { Link } from "gatsby"; // Importing Gatsby's Link component
import { graphql } from "gatsby";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { normalizedData } from "@utils/functions";
import image1 from "../data/images/delaware-chess-champs/23.png";
// import image2 from "../data/images/delaware-chess-champs/22.png";

const FAQPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page.content || []);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Set mobile flag based on width
        };

        handleResize(); // Check size on component mount
        window.addEventListener("resize", handleResize); // Listen for window resizing

        return () => {
            window.removeEventListener("resize", handleResize); // Cleanup event listener
        };
    }, []);

    const buttonStyle = {
        padding: isMobile ? "5px 5px" : "10px 20px", // Smaller padding for mobile
        fontSize: isMobile ? "9px" : "16px", // Smaller font size for mobile
        backgroundColor: "#007BFF",
        color: "#FFF",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold",
    };

    const registerButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#28A745", // Different background for the register button
    };

    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO
                title="Chess Champs Academy – Bear & Middletown"
                pathname="/"
            />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Chess Champs Academy – Bear & Middletown"
            />
          

            <div
                style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "30px",
                }}
            >
                <img
                    src={image1}
                    alt="FAQ Illustration"
                    style={{
                        maxWidth: "90%",
                    }}
                />
                {/* Buttons inside the image */}
                <div
                    style={{
                        position: "absolute",
                        bottom: isMobile ? "20px" : "50px", // Places the buttons at the bottom of the image
                        left: "50%", // Centers the buttons horizontally
                        transform: "translateX(-50%)", // Adjusts position to perfectly center
                        display: "flex",
                        gap: isMobile ? "15px" : "50px", // Smaller gap on mobile
                        fontSize: isMobile ? "14px" : "20px", // Smaller font size on mobile
                    }}
                >
                    
                    <Link to="https://chesschampsus.vercel.app/Bear-and-middletown">
                        <button className="faq-button register">
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

FAQPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query FAQPageQuery {
        allGeneral {
            nodes {
                section
                id
                menu {
                    ...Menu
                }
                footer {
                    ...Footer
                }
            }
        }
        page(title: { eq: "FAQPage" }, pageType: { eq: innerpage }) {
            content {
                ...PageContentAll
                section_title {
                    ...SectionTitle
                }
            }
        }
    }
`;

export default FAQPage;
