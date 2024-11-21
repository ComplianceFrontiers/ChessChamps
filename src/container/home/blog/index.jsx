/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "../../../components/blog/blog-card";
import { LatestBlogSection } from "./style";
import SectionTitleTwo from "../../../components/title-two";

const LatestBlogArea = ({ data }) => {
    return (
        <LatestBlogSection>
            <Container>
                <Row className="gx-5">
                    <Col lg={6} md={12}>
                        <SectionTitleTwo
                            headingTitle={data?.section_title.title}
                            {...data.section_title}
                        />
                        {data?.itemsone?.map((item, i) => (
                            <BlogCard
                                key={i}
                                variant="vertical"
                                link={item.link}
                                image={item.image.src}
                            />
                        ))}
                    </Col>
                    <Col lg={6} md={12}>
                        {data?.itemstwo?.map((item, i) => (
                            <BlogCard
                                key={i}
                                variant="vertical"
                                link={item.link}
                                image={item.image.src}
                            />
                        ))}
                    </Col>
                </Row>
            </Container>
        </LatestBlogSection>
    );
};

LatestBlogArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            title: PropTypes.string,
        }),
        itemsone: PropTypes.arrayOf(
            PropTypes.shape({
                link: PropTypes.string,
                image: PropTypes.shape({
                    src: PropTypes.string.isRequired,
                }).isRequired,
            })
        ),
        itemstwo: PropTypes.arrayOf(
            PropTypes.shape({
                link: PropTypes.string,
                image: PropTypes.shape({
                    src: PropTypes.string.isRequired,
                }).isRequired,
            })
        ),
    }),
};

export default LatestBlogArea;
