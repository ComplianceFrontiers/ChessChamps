import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import ProfileCard from "../../../components/blog/profile-card";
import BlogCardTwo from "../../../components/blog/blog-card-two";
import Categories from "../../../components/widget/articles-categories-widget";
import Tags from "../../../components/widget/articles-tags-widget";
import { BlogGridSection, Aside } from "./style";

const BlogLeftSidebar = ({ data }) => {
    return (
        <BlogGridSection>
            <Container>
                <Row className="gx-5">
                    <Col lg={4}>
                        <Aside>
                            <ProfileCard />
                            <Categories />
                        </Aside>
                    </Col>
                    <Col lg={8}>
                        <Row className="gx-5">
                            {data?.items &&
                                data?.items.map((blog, i) => {
                                    return (
                                        <Col lg={3} md={3} key={i}>
                                            <BlogCardTwo
                                                title={blog.title}
                                                thume_image={blog?.image?.src}
                                                quote_text={blog?.quote_text}
                                                date={blog.date}
                                                slug={blog.slug}
                                            />
                                        </Col>
                                    );
                                })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </BlogGridSection>
    );
};
BlogLeftSidebar.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                fields: PropTypes.shape({
                    slug: PropTypes.string,
                    quote_text: PropTypes.string,
                }),
                alt: PropTypes.string,
            })
        ),
    }),
};
export default BlogLeftSidebar;
