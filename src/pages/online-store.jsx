/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import { Link } from "gatsby"; // Importing Gatsby's Link component
import { graphql } from "gatsby";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { normalizedData } from "@utils/functions";
import image1 from "../data/images/online/image1.png";

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
            <SEO title="Online Store" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Online Store"
            />
             {/* <Link to="/online-class-sell" >
            <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
            }}
       
        >
    <img
        src={image1}
        alt="FAQ Illustration"
        style={{
            maxWidth: "auto",
            height: "auto",
            borderRadius: "8px",
            cursor: "pointer", // Add a pointer cursor for better UX
        }}
    />
</div>
</Link> */}

            <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginBottom:"20px",
            }}
        >
            <img
                src={image1}
                alt="FAQ Illustration"
                style={{
                    maxWidth: "auto",
                    height: "auto",
                    borderRadius: "8px",
                    
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
