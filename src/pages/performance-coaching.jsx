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
import image9 from "../data/images/performance-coaching/performance-coaching.png";


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
            <SEO title="performance-coaching" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="performance-coaching"
            />
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap", // Allows images to wrap to the next line
                    justifyContent: "center",
                    marginBottom:"40px"
                }}
            >
              
            <div
    style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "40px",
    }}
>
    <img
        src={image9}
        alt="Performance Coaching"
        style={{
            maxWidth: "90%",
            height: "auto",
            maxHeight: "1000px",
            objectFit: "contain",
            marginBottom: "10px",
        }}
    />

    <a
        href="https://forms.gle/hiUNeKaAm7okWZPd9"
        target="_blank"
        rel="noopener noreferrer"
        style={{
            backgroundColor: "#007BFF",
            color: "#fff",
            padding: "12px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
            transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
    >
        Register Now
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
