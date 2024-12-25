/* eslint-disable prettier/prettier */
import React, { useState } from "react";
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
        flexDirection: "column", // Stack items vertically
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "30px",
        textAlign: "center", // Ensure centered alignment for text and content
    }}
>
    {/* Image */}
    <div
        style={{
            position: "relative",
            display: "inline-block", // Container for the image and buttons
        }}
    >
        <img
            src={image1}
            alt="FAQ Illustration"
            style={{
                maxWidth: "90%", // Ensure the image scales within its container
                height: "auto",
                borderRadius: "10px", // Add some roundness if needed
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              // Add a shadow for a cleaner look
            }}
        />

        {/* Buttons Inside Image */}
        <div
            style={{
                position: "absolute",
                bottom: "5%", // Position buttons near the bottom of the image
                left: "50%",
                transform: "translateX(-50%)", // Center buttons horizontally
                display: "flex",
                gap: "15px", // Space between the buttons
            }}
        >
            {/* Skill Levels Button */}
            <Link to="/training-curriculum">
                <button
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007BFF",
                        color: "#FFF",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "16px",
                    }}
                >
                    Skill Levels
                </button>
            </Link>

            {/* Register Button */}
            <a
                href="https://buy.stripe.com/dR6eYa9C28ricaA4gq"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#28A745",
                        color: "#FFF",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "16px",
                    }}
                >
                    Register
                </button>
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
