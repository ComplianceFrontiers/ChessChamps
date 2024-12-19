/* eslint-disable prettier/prettier */
/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import image1 from "../../data/images/blog/1.png";
import TeamArea2 from "../../container/home/team2";
import TeamArea3 from "../../container/home/team3";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import Social, { SocialLink } from "../../components/shared/social/index";
import Categories from "../../components/widget/articles-categories-widget";
import Tags from "../../components/widget/articles-tags-widget";
import Author from "../../components/widget/articles-author-widget";

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
    CommentTitle,
    BottomImages,
} from "./style";

const SinglePosts = ({ data, location, pageContext }) => {
    const data1 = {
        section: "team-members-section",
        items: [
            {
                id: "team-members-1",
                headings: [
                    {
                        content: "Siddharth Bose",
                        level: "h4",
                    },
                ],
                images: [
                    {
                        alt: null,
                        src: {
                            childImageSharp: {
                                gatsbyImageData: {
                                    layout: "constrained",

                                    images: {
                                        fallback: {
                                            src: "/static/a3b8ecfe8268718e19beb304dd1f5d68/d9f11/image1.webp",
                                            srcSet: "/static/a3b8ecfe8268718e19beb304dd1f5d68/89c34/image1.webp 1008w,\n/static/a3b8ecfe8268718e19beb304dd1f5d68/bc146/image1.webp 2016w,\n/static/a3b8ecfe8268718e19beb304dd1f5d68/d9f11/image1.webp 4032w",
                                            sizes: "(min-width: 4032px) 4032px, 100vw",
                                        },
                                        sources: [],
                                    },
                                    width: 4032,
                                    height: 3024,
                                },
                            },
                        },
                    },
                ],
                description: null,
                designation: "Grade 7 - Talley Middle School",
                icon: null,
            },
            {
                id: "team-members-2",
                headings: [
                    {
                        content: "Thanvish Reddy1",
                        level: "h4",
                    },
                ],
                images: [
                    {
                        alt: null,
                        src: {
                            childImageSharp: {
                                gatsbyImageData: {
                                    layout: "constrained",

                                    images: {
                                        fallback: {
                                            src: "/static/71c9409b0df756f683c9bf6e58a105eb/d9f11/image2.webp",
                                            srcSet: "/static/71c9409b0df756f683c9bf6e58a105eb/89c34/image2.webp 1008w,\n/static/71c9409b0df756f683c9bf6e58a105eb/bc146/image2.webp 2016w,\n/static/71c9409b0df756f683c9bf6e58a105eb/d9f11/image2.webp 4032w",
                                            sizes: "(min-width: 4032px) 4032px, 100vw",
                                        },
                                        sources: [],
                                    },
                                    width: 4032,
                                    height: 3024,
                                },
                            },
                        },
                    },
                ],
                description: null,
                designation: "Grade K - Claymont Elementary",
                icon: null,
            },
            {
                id: "team-members-3",
                headings: [
                    {
                        content: "Bill Truemam",
                        level: "h4",
                    },
                ],
                images: [
                    {
                        alt: null,
                        src: {
                            childImageSharp: {
                                gatsbyImageData: {
                                    layout: "constrained",

                                    images: {
                                        fallback: {
                                            src: "/static/5a8ea80ae5a159ed6f6f04041f36d69f/d9f11/image3.webp",
                                            srcSet: "/static/5a8ea80ae5a159ed6f6f04041f36d69f/89c34/image3.webp 1008w,\n/static/5a8ea80ae5a159ed6f6f04041f36d69f/bc146/image3.webp 2016w,\n/static/5a8ea80ae5a159ed6f6f04041f36d69f/d9f11/image3.webp 4032w",
                                            sizes: "(min-width: 4032px) 4032px, 100vw",
                                        },
                                        sources: [],
                                    },
                                    width: 4032,
                                    height: 3024,
                                },
                            },
                        },
                    },
                ],
                description: null,
                designation: "Mentor & Head Coach",
                icon: null,
            },
            {
                id: "team-members-4",
                headings: [
                    {
                        content: "Jatin Joshi",
                        level: "h4",
                    },
                ],
                images: [
                    {
                        alt: null,
                        src: {},
                    },
                ],
                description: null,
                designation: "Grade 5 - Claymont Elementary",
                icon: null,
            },
            {
                id: "team-members-2",
                headings: [
                    {
                        content: "Thanvish Reddy2",
                        level: "h4",
                    },
                ],
                images: [
                    {
                        alt: null,
                        src: {
                            childImageSharp: {
                                gatsbyImageData: {
                                    layout: "constrained",

                                    images: {
                                        fallback: {
                                            src: "/static/71c9409b0df756f683c9bf6e58a105eb/d9f11/image2.webp",
                                            srcSet: "/static/71c9409b0df756f683c9bf6e58a105eb/89c34/image2.webp 1008w,\n/static/71c9409b0df756f683c9bf6e58a105eb/bc146/image2.webp 2016w,\n/static/71c9409b0df756f683c9bf6e58a105eb/d9f11/image2.webp 4032w",
                                            sizes: "(min-width: 4032px) 4032px, 100vw",
                                        },
                                        sources: [],
                                    },
                                    width: 4032,
                                    height: 3024,
                                },
                            },
                        },
                    },
                ],
                description: null,
                designation: "Grade K - Claymont Elementary",
                icon: null,
            },
            {
                id: "team-members-3",
                headings: [
                    {
                        content: "Bill Truemam3",
                        level: "h4",
                    },
                ],
                images: [
                    {
                        alt: null,
                        src: {
                            childImageSharp: {
                                gatsbyImageData: {
                                    layout: "constrained",

                                    images: {
                                        fallback: {
                                            src: "/static/5a8ea80ae5a159ed6f6f04041f36d69f/d9f11/image3.webp",
                                            srcSet: "/static/5a8ea80ae5a159ed6f6f04041f36d69f/89c34/image3.webp 1008w,\n/static/5a8ea80ae5a159ed6f6f04041f36d69f/bc146/image3.webp 2016w,\n/static/5a8ea80ae5a159ed6f6f04041f36d69f/d9f11/image3.webp 4032w",
                                            sizes: "(min-width: 4032px) 4032px, 100vw",
                                        },
                                        sources: [],
                                    },
                                    width: 4032,
                                    height: 3024,
                                },
                            },
                        },
                    },
                ],
                description: null,
                designation: "Mentor & Head Coach",
                icon: null,
            },
            {
                id: "team-members-4",
                headings: [
                    {
                        content: "Jatin Joshi4",
                        level: "h4",
                    },
                ],
                images: [
                    {
                        alt: null,
                        src: {},
                    },
                ],
                description: null,
                designation: "Grade 5 - Claymont Elementary",
                icon: null,
            },
            {
                id: "team-members-2",
                headings: [
                    {
                        content: "Thanvish Reddy5",
                        level: "h4",
                    },
                ],
                images: [
                    {
                        alt: null,
                        src: {
                            childImageSharp: {
                                gatsbyImageData: {
                                    layout: "constrained",

                                    images: {
                                        fallback: {
                                            src: "/static/71c9409b0df756f683c9bf6e58a105eb/d9f11/image2.webp",
                                            srcSet: "/static/71c9409b0df756f683c9bf6e58a105eb/89c34/image2.webp 1008w,\n/static/71c9409b0df756f683c9bf6e58a105eb/bc146/image2.webp 2016w,\n/static/71c9409b0df756f683c9bf6e58a105eb/d9f11/image2.webp 4032w",
                                            sizes: "(min-width: 4032px) 4032px, 100vw",
                                        },
                                        sources: [],
                                    },
                                    width: 4032,
                                    height: 3024,
                                },
                            },
                        },
                    },
                ],
                description: null,
                designation: "Grade K - Claymont Elementary",
                icon: null,
            },
            {
                id: "team-members-3",
                headings: [
                    {
                        content: "Bill Truemam6",
                        level: "h4",
                    },
                ],
                images: [
                    {
                        alt: null,
                        src: {
                            childImageSharp: {
                                gatsbyImageData: {
                                    layout: "constrained",

                                    images: {
                                        fallback: {
                                            src: "/static/5a8ea80ae5a159ed6f6f04041f36d69f/d9f11/image3.webp",
                                            srcSet: "/static/5a8ea80ae5a159ed6f6f04041f36d69f/89c34/image3.webp 1008w,\n/static/5a8ea80ae5a159ed6f6f04041f36d69f/bc146/image3.webp 2016w,\n/static/5a8ea80ae5a159ed6f6f04041f36d69f/d9f11/image3.webp 4032w",
                                            sizes: "(min-width: 4032px) 4032px, 100vw",
                                        },
                                        sources: [],
                                    },
                                    width: 4032,
                                    height: 3024,
                                },
                            },
                        },
                    },
                ],
                description: null,
                designation: "Mentor & Head Coach",
                icon: null,
            },
            {
                id: "team-members-4",
                headings: [
                    {
                        content: "Jatin Joshi7",
                        level: "h4",
                    },
                ],
                images: [
                    {
                        alt: null,
                        src: {},
                    },
                ],
                description: null,
                designation: "Grade 5 - Claymont Elementary",
                icon: null,
            },
            {
                id: "team-members-1",
                headings: [
                    {
                        content: "31",
                        level: "h4",
                    },
                ],
                images: [
                    {
                        alt: null,
                        src: {
                            childImageSharp: {
                                gatsbyImageData: {
                                    layout: "constrained",

                                    images: {
                                        fallback: {
                                            src: "/static/a3b8ecfe8268718e19beb304dd1f5d68/d9f11/image1.webp",
                                            srcSet: "/static/a3b8ecfe8268718e19beb304dd1f5d68/89c34/image1.webp 1008w,\n/static/a3b8ecfe8268718e19beb304dd1f5d68/bc146/image1.webp 2016w,\n/static/a3b8ecfe8268718e19beb304dd1f5d68/d9f11/image1.webp 4032w",
                                            sizes: "(min-width: 4032px) 4032px, 100vw",
                                        },
                                        sources: [],
                                    },
                                    width: 4032,
                                    height: 3024,
                                },
                            },
                        },
                    },
                ],
                description: null,
                designation: "Grade 7 - Talley Middle School",
                icon: null,
            },
            {
                id: "team-members-2",
                headings: [
                    {
                        content: "32",
                        level: "h4",
                    },
                ],
                images: [
                    {
                        alt: null,
                        src: {
                            childImageSharp: {
                                gatsbyImageData: {
                                    layout: "constrained",

                                    images: {
                                        fallback: {
                                            src: "/static/71c9409b0df756f683c9bf6e58a105eb/d9f11/image2.webp",
                                            srcSet: "/static/71c9409b0df756f683c9bf6e58a105eb/89c34/image2.webp 1008w,\n/static/71c9409b0df756f683c9bf6e58a105eb/bc146/image2.webp 2016w,\n/static/71c9409b0df756f683c9bf6e58a105eb/d9f11/image2.webp 4032w",
                                            sizes: "(min-width: 4032px) 4032px, 100vw",
                                        },
                                        sources: [],
                                    },
                                    width: 4032,
                                    height: 3024,
                                },
                            },
                        },
                    },
                ],
                description: null,
                designation: "Grade K - Claymont Elementary",
                icon: null,
            },
            {
                id: "team-members-3",
                headings: [
                    {
                        content: "33",
                        level: "h4",
                    },
                ],
                images: [
                    {
                        alt: null,
                        src: {
                            childImageSharp: {
                                gatsbyImageData: {
                                    layout: "constrained",

                                    images: {
                                        fallback: {
                                            src: "/static/5a8ea80ae5a159ed6f6f04041f36d69f/d9f11/image3.webp",
                                            srcSet: "/static/5a8ea80ae5a159ed6f6f04041f36d69f/89c34/image3.webp 1008w,\n/static/5a8ea80ae5a159ed6f6f04041f36d69f/bc146/image3.webp 2016w,\n/static/5a8ea80ae5a159ed6f6f04041f36d69f/d9f11/image3.webp 4032w",
                                            sizes: "(min-width: 4032px) 4032px, 100vw",
                                        },
                                        sources: [],
                                    },
                                    width: 4032,
                                    height: 3024,
                                },
                            },
                        },
                    },
                ],
                description: null,
                designation: "Mentor & Head Coach",
                icon: null,
            },
            {
                id: "team-members-4",
                headings: [
                    {
                        content: "34",
                        level: "h4",
                    },
                ],
                images: [
                    {
                        alt: null,
                        src: {},
                    },
                ],
                description: null,
                designation: "Grade 5 - Claymont Elementary",
                icon: null,
            },
            {
                id: "team-members-2",
                headings: [
                    {
                        content: "35",
                        level: "h4",
                    },
                ],
                images: [
                    {
                        alt: null,
                        src: {
                            childImageSharp: {
                                gatsbyImageData: {
                                    layout: "constrained",

                                    images: {
                                        fallback: {
                                            src: "/static/71c9409b0df756f683c9bf6e58a105eb/d9f11/image2.webp",
                                            srcSet: "/static/71c9409b0df756f683c9bf6e58a105eb/89c34/image2.webp 1008w,\n/static/71c9409b0df756f683c9bf6e58a105eb/bc146/image2.webp 2016w,\n/static/71c9409b0df756f683c9bf6e58a105eb/d9f11/image2.webp 4032w",
                                            sizes: "(min-width: 4032px) 4032px, 100vw",
                                        },
                                        sources: [],
                                    },
                                    width: 4032,
                                    height: 3024,
                                },
                            },
                        },
                    },
                ],
                description: null,
                designation: "Grade K - Claymont Elementary",
                icon: null,
            },
            {
                id: "team-members-3",
                headings: [{ content: "36", level: "h4" }],
                images: [
                    {
                        alt: null,
                        src: {
                            childImageSharp: {
                                gatsbyImageData: {
                                    layout: "constrained",

                                    images: {
                                        fallback: {
                                            src: "/static/5a8ea80ae5a159ed6f6f04041f36d69f/d9f11/image3.webp",
                                            srcSet: "/static/5a8ea80ae5a159ed6f6f04041f36d69f/89c34/image3.webp 1008w,\n/static/5a8ea80ae5a159ed6f6f04041f36d69f/bc146/image3.webp 2016w,\n/static/5a8ea80ae5a159ed6f6f04041f36d69f/d9f11/image3.webp 4032w",
                                            sizes: "(min-width: 4032px) 4032px, 100vw",
                                        },
                                        sources: [],
                                    },
                                    width: 4032,
                                    height: 3024,
                                },
                            },
                        },
                    },
                ],
                description: null,
                designation: "Mentor & Head Coach",
                icon: null,
            },
            {
                id: "team-members-4",
                headings: [
                    {
                        content: "37",
                        level: "h4",
                    },
                ],
                images: [
                    {
                        alt: null,
                        src: {},
                    },
                ],
                description: null,
                designation: "Grade 5 - Claymont Elementary",
                icon: null,
            },
            {
                id: "team-members-2",
                headings: [
                    {
                        content: "38",
                        level: "h4",
                    },
                ],
                images: [
                    {
                        alt: null,
                        src: {
                            childImageSharp: {
                                gatsbyImageData: {
                                    layout: "constrained",

                                    images: {
                                        fallback: {
                                            src: "/static/71c9409b0df756f683c9bf6e58a105eb/d9f11/image2.webp",
                                            srcSet: "/static/71c9409b0df756f683c9bf6e58a105eb/89c34/image2.webp 1008w,\n/static/71c9409b0df756f683c9bf6e58a105eb/bc146/image2.webp 2016w,\n/static/71c9409b0df756f683c9bf6e58a105eb/d9f11/image2.webp 4032w",
                                            sizes: "(min-width: 4032px) 4032px, 100vw",
                                        },
                                        sources: [],
                                    },
                                    width: 4032,
                                    height: 3024,
                                },
                            },
                        },
                    },
                ],
                description: null,
                designation: "Grade K - Claymont Elementary",
                icon: null,
            },
            {
                id: "team-members-3",
                headings: [
                    {
                        content: "39",
                        level: "h4",
                    },
                ],
                images: [
                    {
                        alt: null,
                        src: {
                            childImageSharp: {
                                gatsbyImageData: {
                                    layout: "constrained",

                                    images: {
                                        fallback: {
                                            src: "/static/5a8ea80ae5a159ed6f6f04041f36d69f/d9f11/image3.webp",
                                            srcSet: "/static/5a8ea80ae5a159ed6f6f04041f36d69f/89c34/image3.webp 1008w,\n/static/5a8ea80ae5a159ed6f6f04041f36d69f/bc146/image3.webp 2016w,\n/static/5a8ea80ae5a159ed6f6f04041f36d69f/d9f11/image3.webp 4032w",
                                            sizes: "(min-width: 4032px) 4032px, 100vw",
                                        },
                                        sources: [],
                                    },
                                    width: 4032,
                                    height: 3024,
                                },
                            },
                        },
                    },
                ],
                description: null,
                designation: "Mentor & Head Coach",
                icon: null,
            },
            {
                id: "team-members-4",
                headings: [
                    {
                        content: "40",
                        level: "h4",
                    },
                ],
                images: [
                    {
                        alt: null,
                        src: {},
                    },
                ],
                description: null,
                designation: "Grade 5 - Claymont Elementary",
                icon: null,
            },
        ],
        section_title: {
            title: "Official training partner of Delaware Junior Chess Team",
            subtitle: null,
            description: null,
            align: null,
            iconAlign: null,
            dividerBg: null,
            showIcon: true,
            color: "white",
            showSubTitle: null,
            showShortDec: null,
            icon: {
                alt: "Amazing Team Members",
                src: {
                    childImageSharp: {
                        gatsbyImageData: {
                            layout: "constrained",
                            placeholder: {
                                fallback:
                                    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20preserveAspectRatio='none'%3e%3cpath%20d='M22%2016c-2%201-5%205-5%208%200%202%200%202-4%200-6-2-13%202-13%209v3h19v-4l-1-5h18v-3c0-6-8-11-14-8'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",
                            },
                            images: {
                                fallback: {
                                    src: "/static/b88d37dcd160928b6812d3b0a6b21fb4/3099f/team.webp",
                                    srcSet: "/static/b88d37dcd160928b6812d3b0a6b21fb4/ed744/team.webp 9w,\n/static/b88d37dcd160928b6812d3b0a6b21fb4/4a6f0/team.webp 18w,\n/static/b88d37dcd160928b6812d3b0a6b21fb4/3099f/team.webp 36w",
                                    sizes: "(min-width: 36px) 36px, 100vw",
                                },
                                sources: [],
                            },
                            width: 36,
                            height: 36,
                        },
                    },
                },
            },
        },
    };
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    // Social Share
    const baseUrl = "https://pringo.com";
    const tags1 = [
        {
            title: "Tournaments",
            slug: "tournaments",
        },
        {
            title: "Chess in School",
            slug: "chess-in-school",
        },
        {
            title: "Online Courses",
            slug: "online-courses",
        },
        {
            title: "Chess Store",
            slug: "chess-store",
        },
        {
            title: "Community Outreach",
            slug: "community-outreach",
        },
    ];

    // Disqus Comments add
    const disqusShorttname = "mitech-1";
    const disquscConfig = {
        identifier: data?.article?.id,
        title: data?.article?.title,
        url: baseUrl + "/" + pageContext.slug,
    };
    console.log("wfffw", data?.article?.title);
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
                title={data?.article?.title}
            />
            <BlogDetailsArea>
                <Container>
                    <Row>
                        <Col lg={4} md={4}>
                            <Aside>
                                <Author author={data?.article?.author} />
                                <Categories data={data?.article?.categories} />
                                <Tags data={tags1} />
                            </Aside>
                        </Col>
                        <Col lg={8} md={8}>
                            <PostDetailsContentWrap>
                                <PostDetailsBody>
                                    <Thumb>
                                        {data?.article?.title !==
                                        "Chess in School" ? (
                                            <TeamArea2 data={data1} />
                                        ) : (
                                            <TeamArea3 data={data1} />
                                        )}
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

                            {/* Center-aligned button using Gatsby's Link */}
                            <div
                                style={{
                                    textAlign: "center",
                                    marginBottom: "20px",
                                    marginTop: "20px",
                                }}
                            >
                                <Link
                                    to="/gallery"
                                    style={{
                                        display: "inline-block",
                                        padding: "10px 20px",
                                        fontSize: "16px",
                                        color: "#fff",
                                        backgroundColor: "#007BFF",
                                        borderRadius: "5px",
                                        textDecoration: "none",
                                        transition:
                                            "background-color 0.3s ease",
                                    }}
                                    onMouseOver={(e) =>
                                        (e.target.style.backgroundColor =
                                            "#0056b3")
                                    }
                                    onMouseOut={(e) =>
                                        (e.target.style.backgroundColor =
                                            "#007BFF")
                                    }
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
