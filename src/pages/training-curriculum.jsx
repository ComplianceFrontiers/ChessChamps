/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import { Link } from "gatsby"; // Importing Gatsby's Link component
import { graphql } from "gatsby";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { normalizedData } from "@utils/functions";
import image1 from "../data/images/trainingCurriculum/1.png";
import image2 from "../data/images/trainingCurriculum/2.png";
import image3 from "../data/images/trainingCurriculum/3.png";
import image4 from "../data/images/trainingCurriculum/4.png";
import image5 from "../data/images/trainingCurriculum/5.png";
import image6 from "../data/images/trainingCurriculum/6.png";
import image7 from "../data/images/trainingCurriculum/7.png";
import image8 from "../data/images/trainingCurriculum/8.png";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

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
    {images.map((img, index) => (
        <img
            key={index}
            src={img}
            alt={`Training Curriculum ${index + 1}`}
            style={{
                maxWidth: "90%", // Make images take full width of their container
                height: "auto", // Ensures proper aspect ratio
                objectFit: "contain", // Keeps the image within its container without distortion
                margin: 0, // Removes any space around images
            }}
        />
    ))}
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