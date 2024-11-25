/* eslint-disable prettier/prettier */
import { useStaticQuery, graphql, Link } from "gatsby";
import { flatDeep, slugify, containsObject } from "@utils/functions";
import PropTypes from "prop-types";
import { SidebarWidget, Title, Widgetcategory } from "./style";

const Categories = ({ data }) => {
    const categoriesQuery = useStaticQuery(graphql`
        query CategoriesQuery {
            allArticle {
                edges {
                    node {
                        categories {
                            title
                        }
                    }
                }
            }
        }
    `);

    const categories = categoriesQuery.allArticle.edges;
    const allCategories = flatDeep(
        categories.map((cate) => cate.node.categories)
    );
    let cats = [];
    allCategories.forEach((cat) => {
        const obj = {
            title: cat.title,
            slug: cat.slug,
            count: 1,
        };
        const objIndex = containsObject(obj, cats);
        if (objIndex !== -1) {
            const prevCount = cats[objIndex].count;
            cats[objIndex] = {
                title: cat.title,
            };
        } else {
            cats.push(obj);
        }
    });

    // Ensure `data` is an array or provide a fallback default
    const safeData = Array.isArray(data) ? data : [];
    const firstCategoryTitle = safeData.length > 0 ? safeData[0].title : "Default Title";

    return (
        <SidebarWidget>
            <Title>{firstCategoryTitle}</Title>
            <Widgetcategory>
                {safeData.length > 1 ? (
                    safeData.slice(1).map((cat) => (
                        <li key={cat.slug}>
                            <Link to={`/category/${cat.slug}`}>
                                <i className="icofont-rounded-double-right"></i>{" "}
                                {cat.title}
                            </Link>
                        </li>
                    ))
                ) : (
                    <p>No categories available.</p>
                )}
            </Widgetcategory>
        </SidebarWidget>
    );
};

Categories.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
        })
    ),
};

// Provide a default value for the `data` prop
Categories.defaultProps = {
    data: [],
};

export default Categories;
