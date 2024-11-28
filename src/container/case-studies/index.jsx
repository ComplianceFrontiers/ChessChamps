import PropTypes from "prop-types";
import { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import CaseStudiesGrid from "../../components/case-studies-grid";
import { CaseStudiesSection } from "./style";

const CaseStudiesArea = ({ data }) => {
    const [visibleItems, setVisibleItems] = useState(6); // Show first 6 items initially

    const handleShowMore = () => {
        setVisibleItems((prev) => prev + 6); // Load 6 more items
    };

    const handleFirstButtonRedirect = () => {
        window.location.href = "https://photos.app.goo.gl/9dXrw3e2BXKL2PJfA"; // Redirects to the link in the same tab
    };

    return (
        <CaseStudiesSection>
            <Container>
                <div className="show-more-buttons">
                    {/* Redirect button opens link in the same tab */}
                    <Button onClick={handleFirstButtonRedirect} className="me-2">
                        Tournament
                    </Button>
                    {/* Load more items */}
                    <Button onClick={handleShowMore} className="me-2">
                        Show More
                    </Button>
                    <Button onClick={handleShowMore}>
                        Show More
                    </Button>
                </div>

                <Row className="gx-5">
                    {data?.items &&
                        data?.items.slice(0, visibleItems).map((post, i) => {
                            return (
                                <Col lg={4} md={4} sm={6} key={i}>
                                    <CaseStudiesGrid
                                        title={post.title}
                                        thumbImg={post.images[0].src}
                                        slug={post.slug}
                                    />
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </CaseStudiesSection>
    );
};

CaseStudiesArea.propTypes = {
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

export default CaseStudiesArea;
