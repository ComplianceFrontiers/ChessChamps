import PropTypes from "prop-types";
import { BlogGridSection } from "./style";
import BlogCardTwo from "../../../components/blog/blog-card-two";
import { Col, Container, Row } from "react-bootstrap";

const BlogGrid = ({ data }) => {
    return (
        <BlogGridSection>
            <Container>
                <Row className="gx-5">
                    {data?.items &&
                        data?.items.map((blog, i) => {
                            // Add console.log here
                            console.log(blog);
                            return (
                                <Col lg={4} md={6} key={i}>
                                    <BlogCardTwo
                                        title={blog.title}
                                        thume_image={blog?.image?.src}
                                        quote_text={blog.quote_text}
                                        date={blog.date}
                                        slug={blog.slug}
                                    />
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </BlogGridSection>
    );
};

BlogGrid.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                fields: PropTypes.shape({
                    slug: PropTypes.string,
                }),
                alt: PropTypes.string,
            })
        ),
    }),
};

export default BlogGrid;
