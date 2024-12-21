/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
import image2 from "../data/images/online/image6.png";
import image3 from "../data/images/online/image7.png";
import image4 from "../data/images/online/image8.png";

const FAQPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page.content || []);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Events" pathname="/" />
            
            <div
                style={{
                    display: "flex",
                    flexDirection: "column", // Ensures images are stacked in a column
                    alignItems: "center", // Centers images horizontally
                    gap: "20px", // Adds space between images
                    marginBottom: "20px",
                }}
            >
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    <img
                        src={image2}
                        alt="FAQ Illustration 2"
                        style={{
                            width: "900px", // Default for mobile
                            height: "auto",
                            borderRadius: "8px",
                        }}
                        className="responsive-image"
                    />
                </a>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    <img
                        src={image3}
                        alt="FAQ Illustration 3"
                        style={{
                            width: "900px",
                            height: "auto",
                            borderRadius: "8px",
                        }}
                        className="responsive-image"
                    />
                </a>
                <a href="/events" target="_blank" rel="noopener noreferrer">
                    <img
                        src={image4}
                        alt="FAQ Illustration 4"
                        style={{
                            width: "900px",
                            height: "auto",
                            borderRadius: "8px",
                        }}
                        className="responsive-image"
                    />
                </a>
            </div>
            <style>
                {`
                .responsive-image {
                    transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
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
