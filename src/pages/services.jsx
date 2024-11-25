/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import { graphql } from "gatsby";
import TeamArea from "../container/home/team";
import PageBreadcrumb from "../components/pagebreadcrumb";
import TestimonialArea1 from "../container/home/testimonial1";
import { normalizedData } from "@utils/functions";
import WhyChooseUsArea from "../container/home/whay-choose-us";

const ServicesPages = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page.content || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Services Page" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Services Page"
            />
            <WhyChooseUsArea data={content["why-choose-us-section1"]} />

            <TeamArea data={content["team-members-section1"]} />
            <TestimonialArea1 data={content["happy-customer-section1"]} />
        </Layout>
    );
};
ServicesPages.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allServices: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query servicesPageQuery {
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
        page(title: { eq: "servicesPage" }, pageType: { eq: innerpage }) {
            content {
                ...PageContentAll
                section_title {
                    ...SectionTitle
                }
            }
        }
        allServices(
            sort: { order: DESC, fields: id }
            filter: { is_featured: { eq: true } }
        ) {
            nodes {
                ...Services
            }
        }
    }
`;

export default ServicesPages;
