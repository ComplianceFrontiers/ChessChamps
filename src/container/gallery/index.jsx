/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CaseStudiesSection } from "./style";

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
import image32 from "../../data/images/online/32.png";
import image34 from "../../data/images/online/34.png";
import image41 from "../../data/images/blog/chessclubgallery/IMG_3031.png";
import image42 from "../../data/images/blog/chessclubgallery/IMG_3032.png";
import image43 from "../../data/images/blog/chessclubgallery/IMG_3033.png";
import image44 from "../../data/images/blog/chessclubgallery/IMG_3034.png";
import image45 from "../../data/images/blog/chessclubgallery/IMG_3035.png";
import image46 from "../../data/images/blog/chessclubgallery/IMG_3036.png";
import image47 from "../../data/images/blog/chessclubgallery/IMG_3037.png";
import image48 from "../../data/images/blog/chessclubgallery/IMG_3038.png";
import image49 from "../../data/images/blog/chessclubgallery/IMG_3039.png";
import image50 from "../../data/images/blog/chessclubgallery/IMG_3040.png";
import image51 from "../../data/images/blog/chessclubgallery/IMG_3041.png";
import image52 from "../../data/images/blog/chessclubgallery/IMG_3042.png";
import image53 from "../../data/images/blog/chessclubgallery/IMG_3043.png";
import image54 from "../../data/images/blog/chessclubgallery/IMG_3044.png";
import image55 from "../../data/images/blog/chessclubgallery/IMG_3045.png";
import image56 from "../../data/images/blog/chessclubgallery/IMG_3046.png";
import image57 from "../../data/images/blog/chessclubgallery/IMG_3047.png";
import image58 from "../../data/images/blog/chessclubgallery/IMG_3048.png";
import image59 from "../../data/images/blog/chessclubgallery/IMG_3049.png";
import image60 from "../../data/images/blog/chessclubgallery/IMG_3050.png";

const CaseStudiesArea = () => {
    const [selectedSection, setSelectedSection] = useState("videos"); // ✅ Default: videos

    const imageArray = [
        image7, image8, image9, image10, image11, image12,
        image13, image14, image15, image16, image17, image18,
        image19, image20, image21, image22, image23, image24,
        image25, image26, image27, image28, image29, image32,
        image34, image41, image42, image43, image44, image45,
        image46, image47, image48, image49, image50, image51,
        image52, image53, image54, image55, image56, image57,
        image58, image59, image60
    ];

    return (
        <CaseStudiesSection>
            <Container>
                {/* ===== Buttons Section ===== */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "20px",
                    }}
                >
                    {/* ✅ First button: Videos */}
                    <button
                        onClick={() => setSelectedSection("videos")}
                        style={{
                            backgroundColor:
                                selectedSection === "videos" ? "#2f80ed" : "#e0e0e0",
                            color: selectedSection === "videos" ? "#fff" : "#333",
                            border: "none",
                            borderRadius: "8px",
                            padding: "10px 25px",
                            marginRight: "10px",
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "0.3s",
                        }}
                    >
                        Videos
                    </button>

                    {/* ✅ Second button: Photos */}
                    <button
                        onClick={() => setSelectedSection("photos")}
                        style={{
                            backgroundColor:
                                selectedSection === "photos" ? "#2f80ed" : "#e0e0e0",
                            color: selectedSection === "photos" ? "#fff" : "#333",
                            border: "none",
                            borderRadius: "8px",
                            padding: "10px 25px",
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "0.3s",
                        }}
                    >
                        Photos
                    </button>
                </div>

                {/* ===== Videos Section ===== */}
                {selectedSection === "videos" && (
                    <div
                        style={{
                            width: "100%",
                            maxWidth: "1200px",
                            margin: "0 auto",
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                        }}
                    >
                        <div
                            style={{
                                position: "relative",
                                paddingBottom: "56.25%", // 16:9
                                height: 0,
                                overflow: "hidden",
                                borderRadius: "12px",
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/TN1hgYjM-so?autoplay=1&mute=0&rel=0"
                                title="Chess Champs 2025 Highlights"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "12px",
                                }}
                            ></iframe>
                        </div>
                    </div>
                )}

                {/* ===== Photos Section ===== */}
                {selectedSection === "photos" && (
                    <Row className="gx-5">
                        {imageArray.map((image, index) => (
                            <Col lg={4} md={4} sm={6} key={index} className="mb-4">
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img
                                        src={image}
                                        alt={`Image ${index + 1}`}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            borderRadius: "8px",
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                        }}
                                    />
                                </div>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </CaseStudiesSection>
    );
};

CaseStudiesArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape({})),
    }),
};

export default CaseStudiesArea;
