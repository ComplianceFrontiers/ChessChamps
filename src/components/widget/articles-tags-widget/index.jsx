/* eslint-disable prettier/prettier */
import { useStaticQuery, graphql, Link } from "gatsby";
import { flatDeep, slugify, containsObject } from "@utils/functions";
import PropTypes from "prop-types";
import { SidebarWidget, Title, WidgetTags } from "./style";

const Tags = ({data}) => {
    console.log("hhhhhhhhhh",data)
    const defaultData = [
        {
            title: "Tournaments",
            slug: "tournaments",
        },
    ];

    const tagsData = data && data.length > 0 ? data : defaultData;

    console.log("Data being rendered:", tagsData);

    return (
        <SidebarWidget>
            <Title>Our programs</Title>
            <WidgetTags>
                {tagsData.map((cat) => (
                    <Link key={cat.slug} to={`/tags/${cat.slug}`}>
                        {cat.title}
                    </Link>
                ))}
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
    data: [], // Default value for the prop
};
export default Tags;
