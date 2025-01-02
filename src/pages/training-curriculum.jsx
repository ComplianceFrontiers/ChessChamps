/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import { graphql } from "gatsby";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { normalizedData } from "@utils/functions";
import image1 from "../data/images/trainingCurriculum/11.png";

const FAQPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Training Curriculum" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Training Curriculum"
            />
 
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap", // Allows images to wrap to the next line
                    justifyContent: "center",
                    marginBottom: "20px",
                }}
            >
                <img
                    src={image1}
                    alt="Training Curriculum"
                    style={{
                        maxWidth: "90%",
                        // maxHeight: "1000px", // Optional: limit max height if needed
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
