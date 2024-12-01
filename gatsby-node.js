/* eslint-disable prettier/prettier */
const path = require("path");
const { slugify } = require("./src/utils/functions");
const get = require("lodash.get");
const _ = require("lodash");
const onCreateNode = require("./src/gatsby-utils/onCreateNode");
const createSchemaCustomization = require("./src/gatsby-utils/createSchemaCustomization");
const createResolvers = require("./src/gatsby-utils/createResolvers");

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@theme": path.resolve(__dirname, "./src/theme"),
                "@components": path.resolve(__dirname, "./src/components"),
                "@shared": path.resolve(__dirname, "./src/components/shared"),
                "@containers": path.resolve(__dirname, "./src/containers"),
                "@layout": path.resolve(__dirname, "./src/layouts"),
                "@assets": path.resolve(__dirname, "./src/assets"),
                "@utils": path.resolve(__dirname, "./src/utils"),
                "@constants": path.resolve(__dirname, "./src/constants"),
                "@hooks": path.resolve(__dirname, "./src/hooks"),
                "@data": path.resolve(__dirname, "./src/data"),
            },
        },
    });
};

exports.createSchemaCustomization = createSchemaCustomization;

// Single Post Page
exports.onCreateNode = onCreateNode;

exports.createResolvers = createResolvers;

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const templates = {
        casesPost: path.resolve("src/templates/case-studies-details/index.jsx"),
        servicesPost: path.resolve("src/templates/services-details/index.jsx"),
        singleArticles: path.resolve("src/templates/single-post/index.jsx"),
        singleArticles1: path.resolve("src/templates/single-post1/index.jsx"),
        singleArticles2: path.resolve("src/templates/single-post2/index.jsx"),
        singleArticles3: path.resolve("src/templates/single-post3/index.jsx"),
        singleArticles4: path.resolve("src/templates/single-post4/index.jsx"),
        singleArticles5: path.resolve("src/templates/single-post5/index.jsx"),
        singleArticles6: path.resolve("src/templates/single-post6/index.jsx"),
        tagPosts: path.resolve("src/templates/tag-post/index.jsx"),
        categoriePosts: path.resolve("src/templates/categories-post/index.jsx"),
        authorPage: path.resolve("src/templates/author-post/index.jsx"),
    };
    return graphql(`
        {
            allCaseStudies {
                nodes {
                    slug
                }
            }
            allServices {
                nodes {
                    slug
                }
            }
            allArticle {
                edges {
                    node {
                        slug
                        tags {
                            slug
                        }
                        categories {
                            slug
                        }
                    }
                }
            }
        }
    `).then((res) => {
        if (res.errors) return Promise.reject(res.errors);

        //  Case StudiesJson Details Page
        const caseStudies = res.data.allCaseStudies.nodes;
        caseStudies.forEach((node) => {
            createPage({
                path: `/case-studies/${node.slug}`,
                component: templates.casesPost,
                context: {
                    slug: node.slug,
                },
            });
        });

        //  Services Details Page
        const servicesPosts = res.data.allServices.nodes;
        servicesPosts.forEach((node) => {
            createPage({
                path: `/services/${node.slug}`,
                component: templates.servicesPost,
                context: {
                    slug: node.slug,
                },
            });
        });

        // Create Single Blog Post Page
        const articles = res.data.allArticle.edges;
        articles.forEach(({ node }, index) => {
            // Determine which template to use based on the node index
            const component =
                index === 0
                    ? templates.singleArticles1
                    : index === 1
                    ? templates.singleArticles2
                    : index === 2
                    ? templates.singleArticles3
                    : index === 3
                    ? templates.singleArticles4
                    : index === 4
                    ? templates.singleArticles5
                    : templates.singleArticles6;
                    createPage({
                path: `/${node.slug}`,
                component: component,
                context: {
                    slug: node.slug,
                },
            });
        });
        
        
        
        

        // Create Tags, categories, authors Page
        let tags = [];
        let categories = [];
        articles.forEach((edge) => {
            if (get(edge, "node.tags")) {
                tags = tags.concat(edge.node.tags.map((tag) => tag.slug));
            }
            if (get(edge, "node.categories")) {
                categories = categories.concat(
                    edge.node.categories.map((cat) => cat.slug)
                );
            }
        });

        //Tag Post Page Create
        tags = [...new Set(tags)];
        tags.forEach((tag) => {
            createPage({
                path: `/tags/${tag}`,
                component: templates.tagPosts,
                context: {
                    slug: tag,
                },
            });
        });

        // Create Categories Page
        categories = [...new Set(categories)];
        categories.forEach((category) => {
            createPage({
                path: `/category/${category}`,
                component: templates.categoriePosts,
                context: {
                    slug: category,
                },
            });
        });

        //
    });
};
