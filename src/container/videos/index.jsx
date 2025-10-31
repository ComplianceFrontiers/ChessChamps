/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../../components/title";
import { VideosWrapper, VideoCard, VideoTitle, VideoWrapper } from "./style";

const VideosArea = ({ data }) => {
    return (
        <VideosWrapper>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        title={data.section_title.title}
                        subtitle={data.section_title.subtitle}
                    />
                )}
                <Row className="row--15">
                    {data?.items?.map((video, index) => (
                        <Col lg={4} md={6} sm={12} key={index} className="mb-4">
                            <VideoCard>
                                <VideoWrapper>
                                    <iframe
                                        src={video.url}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </VideoWrapper>
                                <VideoTitle>{video.title}</VideoTitle>
                            </VideoCard>
                        </Col>
                    ))}
                </Row>
            </Container>
        </VideosWrapper>
    );
};

VideosArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            title: PropTypes.string,
            subtitle: PropTypes.string,
        }),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                url: PropTypes.string,
            })
        ),
    }),
};

export default VideosArea;
