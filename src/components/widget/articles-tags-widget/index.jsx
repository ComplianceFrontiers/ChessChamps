/* eslint-disable prettier/prettier */
import { useStaticQuery, graphql, Link } from "gatsby";
import { flatDeep, slugify, containsObject } from "@utils/functions";
import PropTypes from "prop-types";
import { SidebarWidget, Title, WidgetTags } from "./style";

const Tags = ({ data }) => {
    const defaultData = [];

    const tagsData = data && data.length > 0 ? data : defaultData;

    return (
        <SidebarWidget>
            <Title>Our programs</Title>
            <WidgetTags>
                {tagsData.map((cat) => {
                    if (cat.title === "Chess Training") {
                        // External redirect for Chess Training
                        return (
                            <a
                                key={cat.slug}
                                href="https://chesschamps.academy/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {cat.title}
                            </a>
                        );
                    } else {
                        // Internal link for other tags
                        return (
                            <Link key={cat.slug} to={`/${cat.slug}`}>
                                {cat.title}
                            </Link>
                        );
                    }
                })}
            </WidgetTags>
        </SidebarWidget>
    );
};

Tags.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
        })
    ).isRequired,
};

Tags.defaultProps = {
    data: [],
};

export default Tags;
