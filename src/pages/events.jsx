import React, { useState } from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { graphql, Link } from "gatsby";
import { normalizedData } from "@utils/functions";
import image2 from "../data/images/online/image3.png";
import image3 from "../data/images/online/image4.png";
import image4 from "../data/images/online/image5.png";
import image9 from "../data/images/online/image9.png";
import image1 from "../data/images/online/image112.png";
import image5 from "../data/images/online/image113.png";
import image6 from "../data/images/online/image114.png";

const FAQPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page.content || []);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleThirdImageClick = () => {
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
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
                title="Events"
            />

            <div
                style={{
                    display: "flex",
                    flexDirection: "column", // Ensures images are stacked in a column
                    alignItems: "center", // Centers images horizontally
                    gap: "20px", // Adds space between images
                    marginBottom: "20px",
                }}
            >
                <Link to="/celebrating-nationals-win">
                    <img
                        src={image4}
                        alt="FAQ Illustration 1"
                        style={{
                            width: "1000px", // Default for mobile
                            height: "auto",
                            borderRadius: "8px",
                        }}
                        className="responsive-image"
                    />
                </Link>

                <Link to="/Wilmington-Chess-Program">
                    <img
                        src={image5}
                        alt="FAQ Illustration 2"
                        style={{
                            width: "1000px", // Default for mobile
                            height: "auto",
                            borderRadius: "8px",
                        }}
                        className="responsive-image"
                    />
                </Link>

                <div>
                    <img
                        onClick={handleThirdImageClick}
                        src={image6}
                        alt="FAQ Illustration 3"
                        style={{
                            width: "1000px", // Default for mobile
                            height: "auto",
                            borderRadius: "8px",
                            cursor: "pointer"
                        }}
                        className="responsive-image"
                     />
                </div>
                

                
                {/* <Link to="/DCC-Tournament">
                    <img
                        src={image1}
                        alt="FAQ Illustration 2"
                        style={{
                            width: "1000px", // Default for mobile
                            height: "auto",
                            borderRadius: "8px",
                        }}
                        className="responsive-image"
                    />
                </Link> */}
                <Link to="/NJCC">
                    <img
                        src={image3}
                        alt="FAQ Illustration 3"
                        style={{
                            width: "1000px",
                            height: "auto",
                            borderRadius: "8px",
                        }}
                        className="responsive-image"
                    />
                </Link>

                <Link to="https://chess-champs-tournaments.vercel.app/">
                    <img
                        src={image2}
                        alt="FAQ Illustration 4"
                        style={{
                            width: "1000px",
                            height: "auto",
                            borderRadius: "8px",
                        }}
                        className="responsive-image"
                    />
                </Link>
            </div>

            {isPopupVisible && (
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "white",
                        padding: "20px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        zIndex: 1000,
                        textAlign: "center",
                        borderRadius: "8px",
                    }}
                >
                    <p>Launching Soon</p>
                    <button
                        style={{
                            marginTop: "10px",
                            padding: "5px 10px",
                            backgroundColor: "#007BFF",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                        onClick={closePopup}
                    >
                        Close
                    </button>
                </div>
            )}

            <style>
                {`
                .responsive-image {
                    transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
                }
                @media (max-width: 768px) {
                    .responsive-image {
            width: 100%; /* Adjusted for smaller screens */
            height: auto;
            padding-left:10px;
             padding-right:10px;
                    }
                }
                @media (min-width: 768px) {
                    .responsive-image {
            width: 80%; /* Larger size for tablets */
            height: auto;
                    }
                }
                @media (min-width: 1024px) {
                    .responsive-image {
            width: 70%; /* Larger size for desktops */
            height: auto;
                    }
                }
                `}
            </style>
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
