/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { LatestBlogSection, BlogThumb } from "./style";
import SectionTitle from "../../../components/title";

const LatestBlogArea = ({ data }) => {
    // Split the itemstwo array into two parts
    const firstThreeItems = data?.itemstwo?.slice(0, 3);
    const nextThreeItems = data?.itemstwo?.slice(3, 6);

    return (
        <LatestBlogSection>
            <Container >
             {data?.section_title && (
                    <SectionTitle
                        headingTitle={data?.section_title.title}
                        {...data.section_title}
                    />
                )}
                 <Row>
                    {/* First Column with the first three images */}
                    <Col lg={6} md={12}>
                        {firstThreeItems?.map((item, i) => (
                            <Link key={i} to={item.link}>
                                <BlogThumb>
                                    <GatsbyImage
                                        image={getImage(item.image.src)}
                                        alt={`Blog image ${i + 1}`}
                                    />
                                </BlogThumb>
                            </Link>
                        ))}
                    </Col>

                    {/* Second Column with the next three images */}
                    <Col lg={6} md={12}>
                        {nextThreeItems?.map((item, i) => (
                            <Link key={i} to={item.link}>
                                <BlogThumb>
                                    <GatsbyImage
                                        image={getImage(item.image.src)}
                                        alt={`Blog image ${i + 4}`}
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
