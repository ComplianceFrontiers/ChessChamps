/* eslint-disable prettier/prettier */
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "../components/pagebreadcrumb";
import Hero from "../container/home/hero";
import BrandArea from "../container/home/brand";
import WorkingProcessArea from "../container/home/working-process";
import WhyChooseUsArea from "../container/home/whay-choose-us";
import CaseStudiesArea from "../container/home/gallery";
import TeamArea from "../container/home/team";
import TestimonialArea from "../container/home/testimonial";
import LatestBlogArea from "../container/home/blog";
import { normalizedData } from "@utils/functions";
import PageBreadcrumbHome from "../components/pagebreadcrumbhome";
import PopupAfterLogin from "../components/PopupAfterLogin";

const IndexPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page.content || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            {/* <Hero  /> */}
            <SEO title="Home page" pathname="/" />
            <PageBreadcrumbHome
                title="Home page"
            />
            {/* <PopupAfterLogin /> */}
            <WhyChooseUsArea data={content["why-choose-us-section"]} />

            {/* <BrandArea data={content["brand-section"]} /> */}
            <LatestBlogArea
                data={{
                    ...content["blog-section"],
                    itemstwo: data.latestPosts.nodes,
                }}
            />
            <TeamArea data={content["team-members-section"]} />
            <TestimonialArea data={content["happy-customer-section"]} />

           
            
            <WorkingProcessArea data={content["brand-section"]} />
            <CaseStudiesArea
                data={{
                    ...content["case-studies-section"],
                    items: data.allCaseStudies.nodes,
                }}
            />
            
            
        </Layout>
    );
};

IndexPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allCaseStudies: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allServices: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        latestPosts: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        featuredPosts: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query homePageQuery {
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
        page(title: { eq: "home" }, pageType: { eq: homepage }) {
            content {
                ...PageContentAll
                section_title {
                    ...SectionTitle
                }
            }
        }
        allCaseStudies(
            sort: { order: DESC, fields: id }
            filter: { is_featured: { eq: true } }
        ) {
            nodes {
                ...CaseStudies
            }
        }
        allServices(
            limit: 4
            sort: { order: DESC, fields: id }
            filter: { is_featured: { eq: true } }
        ) {
            nodes {
                ...Services
            }
        }
        featuredPosts: allArticle(
            limit: 3
            sort: { order: ASC, fields: date }
        ){ nodes {
                ...Articles
            }
            
        }
        latestPosts: allArticle(limit: 3, sort: { order: DESC, fields: date }) {
            nodes {
                ...Articles
            }
        }
    }
`;

export default IndexPage;
