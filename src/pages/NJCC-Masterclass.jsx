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
 
           {/* Image and Buttons Section */}
<div
    style={{
        display: "flex",
        flexDirection: "column", // Stack image and buttons vertically
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "30px",
    }}
>
    {/* Image */}
    <img
        src={image1}
        alt="FAQ Illustration"
        style={{
            maxWidth: "90%",
        }}
    />

    {/* Buttons */}
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px", // Space between the buttons
            marginTop: "20px", // Space between the image and buttons
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
