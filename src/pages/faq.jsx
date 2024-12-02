/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import { graphql } from "gatsby";
import PageBreadcrumb from "../components/pagebreadcrumb";
import BlogGrid1 from "../container/blog/blog-grid1";
import { normalizedData } from "@utils/functions";
import image1 from "../data/images/online/image2.png";


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
            <SEO title="Events" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Events"
            />
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
