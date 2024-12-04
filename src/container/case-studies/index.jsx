/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CaseStudiesGrid from "../../components/case-studies-grid";
import { CaseStudiesSection } from "./style";
import image1 from "../../data/images/online/1.png";
import image2 from "../../data/images/online/2.png";
import image3 from "../../data/images/online/3.png";
import image4 from "../../data/images/online/4.png";
import image5 from "../../data/images/online/5.png";
import image6 from "../../data/images/online/6.png";
import image7 from "../../data/images/online/7.png";
import image8 from "../../data/images/online/8.png";
import image9 from "../../data/images/online/9.png";
import image10 from "../../data/images/online/10.png";
import image11 from "../../data/images/online/11.png";
import image12 from "../../data/images/online/12.png";
import image13 from "../../data/images/online/13.png";
import image14 from "../../data/images/online/14.png";
import image15 from "../../data/images/online/15.png";
import image16 from "../../data/images/online/16.png";
import image17 from "../../data/images/online/17.png";
import image18 from "../../data/images/online/18.png";
import image19 from "../../data/images/online/19.png";
import image20 from "../../data/images/online/20.png";
import image21 from "../../data/images/online/21.png";
import image22 from "../../data/images/online/22.png";
import image23 from "../../data/images/online/23.png";
import image24 from "../../data/images/online/24.png";
import image25 from "../../data/images/online/25.png";
import image26 from "../../data/images/online/26.png";
import image27 from "../../data/images/online/27.png";
import image28 from "../../data/images/online/28.png";
import image29 from "../../data/images/online/29.png";
import image30 from "../../data/images/online/30.png";
import image31 from "../../data/images/online/31.png";
import image32 from "../../data/images/online/32.png";
import image33 from "../../data/images/online/33.png";
import image34 from "../../data/images/online/34.png";
import image35 from "../../data/images/online/35.png";
import image36 from "../../data/images/online/36.png";
import image37 from "../../data/images/online/37.png";
import image38 from "../../data/images/online/38.png";
import image39 from "../../data/images/online/39.png";
import image40 from "../../data/images/online/40.png";


const CaseStudiesArea = ({ data }) => {
    const [visibleItems, setVisibleItems] = useState(6); // Show first 6 items initially

    const handleShowMore = () => {
        setVisibleItems((prev) => prev + 6); // Load 6 more items
    };

    const handleFirstButtonRedirect = () => {
        window.location.href = "https://photos.app.goo.gl/9dXrw3e2BXKL2PJfA"; // Redirects to the link in the same tab
    };

    const imageArray = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
        image20,
        image21,
        image22,
        image23,
        image24,
        image25,
        image26,
        image27,
        image28,
        image29,
        image30,
        image31,
        image32,
        image33,
        image34,
        image35,
        image36,
    ];
    

    return (
        <CaseStudiesSection>
            <Container>
                <div className="show-more-buttons">
                   { /* Redirect button opens link in the same tab */ }
                    {/* <Button onClick={handleFirstButtonRedirect} className="me-2">
                        Tournament
                    </Button>
                    {/* Load more items */}
                    {/* <Button onClick={handleShowMore} className="me-2">
                        Show More
                    </Button>
                    <Button onClick={handleShowMore}>
                        Show More
                    </Button> */}
                </div>

                {/* <Row className="gx-5">
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
                </Row> */}
                <Row className="gx-5">
                    {imageArray.map((image, index) => (
                        <Col lg={4} md={4} sm={6} key={index} className="mb-4">
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                 
                                    <img
                                        src={image}
                                        alt={`Image ${index + 1}`}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            borderRadius: "8px",
                                        }}
                                    />
                              
                            </div>
                        </Col>
                    ))}
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
