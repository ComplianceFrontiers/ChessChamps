/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
import image1 from "../data/images/online/blog2.png";
import image2 from "../data/images/online/blog2Read.png";


const FAQPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page.content || []);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        parent_first_name: "",
        parent_last_name: "",
        child_first_name: "",
        child_last_name: "",
        phone: "",
        BasicsOfChess_Online: true,
        SchoolName: "online",
        onlinePurchase: false,
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const buttonStyle = {
        padding: isMobile ? "6px 10px" : "10px 20px",
        fontSize: isMobile ? "12px" : "16px",
        backgroundColor: "#007BFF",
        color: "#FFF",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
        marginTop: "15px",
        marginBottom: "15px",
        transition: "background-color 0.3s ease",
    };

    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Blog" pathname="/" />
            <PageBreadcrumb pageContext={pageContext} location={location} title="Blog" />

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                {/* IMAGE SECTION */}
                <div
                    style={{
                        position: "relative",
                        // display: "inline-block",
                    }}
                >
                    <img
                        src={image1}
                        alt="FAQ Illustration"
                        style={{
                            maxWidth: "90%",
                            // height: "auto",
                            borderRadius: "10px",
                            // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        }}
                    />
                </div>

                {/* TITLE AND PARAGRAPH SECTION */}
                <h2
                    style={{
                        marginTop: "25px",
                        fontSize: isMobile ? "20px" : "28px",
                        fontWeight: "700",
                        color: "#222",
                    }}
                >
                    Building Youth Leaders Through Chess
                </h2>

                <p
                    style={{
                        maxWidth: "700px",
                        lineHeight: "1.6",
                        fontSize: isMobile ? "14px" : "17px",
                        color: "#444",
                        marginTop: "10px",
                        padding: "0 15px",
                    }}
                >
                    The Leo Club of Chess Chums promotes love, karma, learning, and friendship through chess, nurturing empathy, discipline, strategy, and confidence in youth.
                </p>

                {/* READ MORE BUTTON */}
                {/* READ MORE BUTTON */}
<button
    style={buttonStyle}
    onClick={() => window.open(image2, "_blank")}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
>
    Read More
</button>

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
