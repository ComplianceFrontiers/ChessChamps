/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { LatestBlogSection,
    BlogThumb, } from "./style";
import SectionTitleTwo from "../../../components/title-two";


const LatestBlogArea = ({ data }) => {
    return (
        <LatestBlogSection>
            <Container>
                <Row className="gx-5">
                    <Col lg={6} md={12}>
                        {data?.itemsone?.map((item, i) => (
                            <Link key={i} to={item.link}>
                                <BlogThumb>
                                    <GatsbyImage
                                        image={getImage(item.image.src)}
                                        alt={`Blog image ${i}`}
                                    />
                                </BlogThumb>
                            </Link>
                        ))}
                    </Col>
                    <Col lg={6} md={12}>
                        {data?.itemstwo?.map((item, i) => (
                            <Link key={i} to={item.link}>
                                 <BlogThumb>
                                    <GatsbyImage
                                        image={getImage(item.image.src)}
                                        alt={`Blog image ${i}`}
                                    />
                                 </BlogThumb>
                            </Link>
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
                link: PropTypes.string.isRequired,
                image: PropTypes.shape({
                    src: PropTypes.string.isRequired,
                }).isRequired,
            })
        ),
        itemstwo: PropTypes.arrayOf(
            PropTypes.shape({
                link: PropTypes.string.isRequired,
                image: PropTypes.shape({
                    src: PropTypes.string.isRequired,
                }).isRequired,
            })
        ),
    }),
};

export default LatestBlogArea;
