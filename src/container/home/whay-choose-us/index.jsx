/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ChooseUsList from "../../../components/choose-us-list";
import SectionTitleTwo from "../../../components/title-two";
import {
    WhyChooseUsSection,
    ChooseUsImage,
    WhyChooseUsOffset,
    ChooseListWrpa,
} from "./style";

const WhyChooseUsArea = ({ data }) => {
    const renderDescription = (description) => {
        if (!description) return null;

        // Split the description by double newlines to separate into paragraphs
        const paragraphs = description.split('\n\n').map((para, index) => {
            return <p key={index}>{para}</p>; // Render each paragraph separately
        });

        return paragraphs;
    };

    return (
        <WhyChooseUsSection>
            <Container className="container-max">
                <Row className="align-items-center">
                    <Col lg={6}>
                    <ChooseUsImage>
    <iframe
        width="100%"
        height="415"
        src="https://www.youtube.com/embed/vaC_lF3pVjw?autoplay=1&mute=1&loop=1&playlist=vaC_lF3pVjw"

        // src="https://youtu.be/Vj2Q_11tol0?si=rTDUTfrR8fzHU-cQ"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        // className="choose-us-img"
        style={{ backgroundColor: 'white' }}
    ></iframe>
</ChooseUsImage>

                    </Col>
                    <Col lg={6}>
                        <WhyChooseUsOffset>
                            <SectionTitleTwo
                                subTitle={data?.section_title.subtitle}
                                title={data?.section_title.title}
                                shortDec={data?.section_title.description}
                                {...data.section_title}
                            />
                            {data?.items &&
                                data?.items.map((item, i) => {
                                    return (
                                        <ChooseListWrpa key={i}>
                                            <ChooseUsList
                                                icon={item.images?.[0].src}
                                                title={item.headings[0].content}
                                                description={renderDescription(item.description)}
                                            />
                                        </ChooseListWrpa>
                                    );
                                })}
                        </WhyChooseUsOffset>
                    </Col>
                </Row>
            </Container>
        </WhyChooseUsSection>
    );
};

WhyChooseUsArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            title: PropTypes.string,
            subtitle: PropTypes.string,
            description: PropTypes.string,
            icon: PropTypes.shape({
                src: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
                alt: PropTypes.string,
            }),
        }),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                images: PropTypes.arrayOf(
                    PropTypes.shape({
                        src: PropTypes.string,
                    })
                ),
                headings: PropTypes.arrayOf(
                    PropTypes.shape({
                        content: PropTypes.string,
                    })
                ),
                description: PropTypes.string,
            })
        ),
    }),
};

export default WhyChooseUsArea;
