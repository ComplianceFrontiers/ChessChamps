/* eslint-disable prettier/prettier */
/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import image1 from "../../data/images/blog/1.png"
import TeamArea2 from "../../container/home/team2";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import Social, { SocialLink } from "../../components/shared/social/index";
import Categories from "../../components/widget/articles-categories-widget";
import Tags from "../../components/widget/articles-tags-widget";
import Author from "../../components/widget/articles-author-widget";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { DiscussionEmbed } from "disqus-react";
import { normalizedData } from "@utils/functions";
import {
    SingleBlogContent,
    PostDetailsContentWrap,
    BlogDetailsArea,
    PostDetailsBody,
    Thumb,
    SocialShareCard,
    Aside,
    Content,
    Title,
    MetaBox,
    CommentArea,
    CommentTitle,BottomImages
} from "./style";

const SinglePosts = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    // Social Share
    const baseUrl = "https://pringo.com";

    // Disqus Comments add
    const disqusShorttname = "mitech-1";
    const disquscConfig = {
        identifier: data?.article?.id,
        title: data?.article?.title,
        url: baseUrl + "/" + pageContext.slug,
    };

    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title={data?.article?.title} pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}         
                location={location}
                title= {data?.article?.title}
            />
            <BlogDetailsArea>
    <Container>
        <Row>
            <Col lg={4} md={4}>
                <Aside>
                    <Author author={data?.article?.author} />
                    <Categories data={data?.article?.categories} />
                    <Tags data={data?.article?.tags} />
                </Aside>
            </Col>
            <Col lg={8} md={8}>
                <PostDetailsContentWrap>
                    <PostDetailsBody>
                        <Thumb>
                            <GatsbyImage
                                image={getImage(data?.article?.image?.src)}
                                alt={data?.article?.title}
                            />
                        </Thumb>
                        <Content>
                            <SingleBlogContent
                                dangerouslySetInnerHTML={{
                                    __html: data?.article?.content,
                                }}
                            />
                        </Content>
                    </PostDetailsBody>
                </PostDetailsContentWrap>
           
                       <TeamArea2/>

           
        {/* Center-aligned button using Gatsby's Link */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <Link
                to="/case-studies"
                style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    fontSize: "16px",
                    color: "#fff",
                    backgroundColor: "#007BFF",
                    borderRadius: "5px",
                    textDecoration: "none",
                    transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
            >
                Visit Gallery
            </Link>
        </div>
        </Col>
        </Row>
   
    </Container>
    
</BlogDetailsArea>

        </Layout>
    );
};

SinglePosts.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        article: PropTypes.shape({
            image: PropTypes.shape({
                src: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.shape({}),
                ]).isRequired,
                alt: PropTypes.string,
            }),
            tags: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string,
                })
            ),
            categories: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string,
                })
            ),
            alt: PropTypes.string,
            id: PropTypes.string,
            title: PropTypes.string,
            date: PropTypes.string,
            quote_text: PropTypes.string,
            slug: PropTypes.string,
            content: PropTypes.string,
            author: PropTypes.shape({
                name: PropTypes.string,
                bio: PropTypes.string,
            }),
        }),
    }),
};

export const postQuery = graphql`
    query articleBySlug($slug: String!) {
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
        article(slug: { eq: $slug }) {
            id
            title
            slug
            title
            tags {
                title
                slug
            }
            categories {
                title
                slug
            }
            author {
                slug
                bio
                description
                name
                image {
                    src {
                        childImageSharp {
                            gatsbyImageData(
                                formats: WEBP
                                placeholder: TRACED_SVG
                                quality: 100
                            )
                        }
                    }
                    alt
                }
                socials {
                    icon
                    id
                    link
                    title
                }
            }
            date
            quote_text
            image {
                src {
                    childImageSharp {
                        gatsbyImageData(
                            formats: WEBP
                            placeholder: TRACED_SVG
                            quality: 100
                        )
                    }
                }
                alt
            }
            content
        }
    }
`;
export default SinglePosts;
