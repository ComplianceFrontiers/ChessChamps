/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import { Link } from "gatsby"; // Importing Gatsby's Link component
import { graphql } from "gatsby";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { normalizedData } from "@utils/functions";

// Import images dynamically (images 9.png to 15.png)
import images from "../data/images/celebrating-nationals-win/";

const FAQPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page.content || []);

    // Array of image file names
    const imageFiles = [
        "9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png"
    ];

    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Celebrating Nationals Win" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Celebrating Nationals Win"
            />
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap", // Allows images to wrap to the next line
                    justifyContent: "center",
                    gap: "20px", // Space between images
                }}
            >
                {/* Map through image files and display each image */}
                {imageFiles.map((imageFile, index) => (
                    <img
                        key={index}
                        src={images[imageFile]}
                        alt={`Image ${index + 9}`}
                        style={{
                            maxWidth: "90%",
                            marginBottom: "20px", // Space between images
                            borderRadius: "10px", // Optional: rounded corners for a cleaner look
                        }}
                    />
                ))}
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
