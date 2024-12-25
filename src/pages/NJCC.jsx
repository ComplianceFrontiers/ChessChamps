/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { graphql, Link } from "gatsby";
import { normalizedData } from "@utils/functions";
import image1 from "../data/images/online/image10.png";
import image2 from "../data/images/online/image11.png";
import image3 from "../data/images/online/image12.png";

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
                title="New Jersey Chess Champs"
            />

            {/* Image 1 */}
            <Link href="/NJCC-Masterclass">
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
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
                </div>
            </Link>

            {/* Image 2 */}
            <Link href="/NJCC-Tournament">
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        marginBottom: "30px",
                    }}
                >
                    <img
                        src={image2}
                        alt="FAQ Illustration"
                        style={{
                            maxWidth: "90%",
                        }}
                    />
                </div>
            </Link>

            {/* Image 3 */}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginBottom: "30px",
                }}
            >
                <img
                    src={image3}
                    alt="FAQ Illustration"
                    style={{
                        maxWidth: "90%",
                        cursor: "pointer",
                    }}
                    onClick={handleThirdImageClick}
                />
            </div>

            {/* Popup Box */}
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

            {/* Overlay */}
            {isPopupVisible && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 999,
                    }}
                    onClick={closePopup}
                ></div>
            )}
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
