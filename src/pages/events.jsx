/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
import image1 from "../data/images/online/image2.png";


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
            {/* <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Events"
            /> */}
               <div
    style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
    }}
>
    <a href="https://chess-champs-tournaments.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img
            src={image1}
            alt="FAQ Illustration"
            style={{
                maxWidth: "auto",
                height: "auto",
                borderRadius: "8px",
            }}
        />
    </a>
</div>
{/* <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px"
                        }}
        >
            <button
                style={{
                    backgroundColor: isHovered ? "#feb423" : "#9f8460", // Change color on hover
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "16px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transform: isHovered ? "scale(1.05)" : "scale(1)", // Slight enlarge on hover
                    transition: "transform 0.2s, background-color 0.2s", // Smooth transition
                    marginBottom: "20px",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() =>
                    window.open(
                        "https://chess-champs-tournaments.vercel.app/",
                        "_blank"
                    )
                }
            >
                Join Our Club
            </button>
        </div> */}
 {/* <BlogGrid1
                data={ 
                    ["tring","tring"]
                }
            />       */}
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
