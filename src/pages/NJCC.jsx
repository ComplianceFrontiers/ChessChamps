/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { graphql, Link } from "gatsby";
import { normalizedData } from "@utils/functions";
import image1 from "../data/images/online/image6.png";

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
                title="New Jersey Chess Champs"
            />
  <Link href="/NJCC-Masterclass">
             <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap", // Allows images to wrap to the next line
                                justifyContent: "center",
                                marginBottom:"30px"
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
