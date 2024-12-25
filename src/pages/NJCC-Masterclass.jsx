/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { graphql, Link } from "gatsby";
import { normalizedData } from "@utils/functions";
import image1 from "../data/images/basics-of-chess/1.png";

const FAQPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page.content || []);
    const [isHovered, setIsHovered] = useState(false);
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
        padding: isMobile ? "2px 4px" : "10px 20px", // Smaller padding for mobile
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
            <SEO title="Events" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Basics of Chess"
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "30px",
                    textAlign: "center",
                }}
            >
                {/* Image */}
                <div
                    style={{
                        position: "relative",
                        display: "inline-block",
                    }}
                >
                    <img
                        src={image1}
                        alt="FAQ Illustration"
                        style={{
                            maxWidth: "90%",
                            height: "auto",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        }}
                    />

                    {/* Buttons Inside Image */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: "5%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            display: "flex",
                            gap: "15px",
                        }}
                    >
                        {/* Skill Levels Button */}
                        <Link to="/training-curriculum">
                            <button style={buttonStyle}>Skill Levels</button>
                        </Link>

                        {/* Register Button */}
                        <a
                            href="https://buy.stripe.com/dR6eYa9C28ricaA4gq"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button style={registerButtonStyle}>Register</button>
                        </a>
                    </div>
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
