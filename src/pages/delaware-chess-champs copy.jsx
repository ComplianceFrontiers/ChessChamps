/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import { Link } from "gatsby"; // Importing Gatsby's Link component
import { graphql } from "gatsby";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { normalizedData } from "@utils/functions";
import image1 from "../data/images/delaware-chess-champs/13.png";
import image2 from "../data/images/delaware-chess-champs/14.png";

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
            <SEO title="Delaware Chess Champs" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Delaware Chess Champs"
            />
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap", // Allows images to wrap to the next line
                    justifyContent: "center",
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

            <div
    style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
    }}
>
    <img
        src={image2}
        alt="FAQ Illustration"
        style={{
            maxWidth: "90%",
        }}
    />
    {/* Buttons inside the image */}
    <div
        style={{
            position: "absolute",
            bottom: "50px", // Places the buttons at the bottom of the image
            left: "50%", // Centers the buttons horizontally
            transform: "translateX(-50%)", // Adjusts position to perfectly center
            display: "flex",
            gap: "50px",
            fontSize: "20px",
        }}
    >
        <Link  href="/training-curriculum">
        <button
            style={{
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#FFF",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
           
            }}
        >
            Training Curriculum
        </button>
        </Link > 
        <Link  href="https://chesschampsus.vercel.app/JCC_ChessChamps">
        <button
            style={{
                padding: "10px 20px",
                backgroundColor: "#28A745",
                color: "#FFF",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
            }}
        >
            Register
        </button>
        </Link>
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
