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
import image9 from "../data/images/NJCC_Gallery/16.png";
import image10 from "../data/images/NJCC_Gallery/17.png";
import image11 from "../data/images/NJCC_Gallery/18.png";
import image12 from "../data/images/NJCC_Gallery/19.png";
import image13 from "../data/images/NJCC_Gallery/20.png";

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
            <SEO title="NJCC Gallery" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="NJCC Gallery"
            />
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap", // Allows images to wrap to the next line
                    justifyContent: "center",
                    marginBottom:"30px",
                }}
            >
                {/* Display each image one after the other */}
                <img
                    src={image9}
                    alt="Image 9"
                    style={{
                        maxWidth: "90%",
                    }}
                />
                <img
                    src={image10}
                    alt="Image 10"
                    style={{
                        maxWidth: "90%",
                    }}
                />
                <img
                    src={image11}
                    alt="Image 11"
                    style={{
                        maxWidth: "90%",
                    }}
                />
                <img
                    src={image12}
                    alt="Image 12"
                    style={{
                        maxWidth: "90%",
                    }}
                />
                <img
                    src={image13}
                    alt="Image 13"
                    style={{
                        maxWidth: "90%",
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
