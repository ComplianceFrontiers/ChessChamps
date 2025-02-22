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
import { graphql } from "gatsby";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { normalizedData } from "@utils/functions";

// Import images for 9.png to 15.png
import image9 from "../data/images/celebrating-nationals-win/9.png";
import image10 from "../data/images/celebrating-nationals-win/10.png";
import image11 from "../data/images/celebrating-nationals-win/11.png";
import image12 from "../data/images/celebrating-nationals-win/12.png";
import image13 from "../data/images/celebrating-nationals-win/13.png";
import image14 from "../data/images/celebrating-nationals-win/14.png";
import image15 from "../data/images/celebrating-nationals-win/15.png";

const FAQPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page.content || []);

    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="DE State Team Achievement " pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="DE State Team Achievement "
            />
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap", // Allows images to wrap to the next line
                    justifyContent: "center",
                    marginBottom:"40px"
                }}
            >
                {/* Display each image one after the other */}
                <img
                    src={image9}
                    alt="Image 9"
                    style={{
                        
maxWidth: "90%",
height: "auto",
        maxHeight: "1000px",
        objectFit: "contain",
                    }}
                />
                <img
                    src={image10}
                    alt="Image 10"
                    style={{
                        
maxWidth: "90%",
height: "auto",
        maxHeight: "1000px",
        objectFit: "contain",
                    }}
                />
                <img
                    src={image11}
                    alt="Image 11"
                    style={{
                        
maxWidth: "90%",
height: "auto",
        maxHeight: "1000px",
        objectFit: "contain",
                    }}
                />
                <img
                    src={image12}
                    alt="Image 12"
                    style={{
                        
maxWidth: "90%",
height: "auto",
        maxHeight: "1000px",
        objectFit: "contain",
                    }}
                />
                <img
                    src={image13}
                    alt="Image 13"
                    style={{
                        
maxWidth: "90%",
height: "auto",
        maxHeight: "1000px",
        objectFit: "contain",
                    }}
                />
                <img
                    src={image14}
                    alt="Image 14"
                    style={{
                        
maxWidth: "90%",
height: "auto",
        maxHeight: "1000px",
        objectFit: "contain",
                    }}
                />
                <img
                    src={image15}
                    alt="Image 15"
                    style={{
                        
maxWidth: "90%",
height: "auto",
        maxHeight: "1000px",
        objectFit: "contain",
                    }}
                />
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
