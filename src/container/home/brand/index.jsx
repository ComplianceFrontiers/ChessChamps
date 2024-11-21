import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import { BrandSection, BrandBox } from "./style";

const BrandArea = ({ data }) => {
    const stats = [
        { id: 1, value: 1000, label: "Tournament Experience" },
        { id: 2, value: 200, label: "Club Members" },
        { id: 3, value: 50, label: "Years of Experience" },
        { id: 4, value: 10, label: "Coaches" },
    ];

    return (
        <BrandSection>
            <Container className="container-max">
                <Row>
                    <Col>
                        <BrandBox>
                            <div className="brand-stats">
                                <Row>
                                    {stats.map((stat) => (
                                        <Col
                                            key={stat.id}
                                            className="stat-item"
                                            lg={3}
                                            md={6}
                                        >
                                            <AnimatedCounter
                                                targetValue={stat.value}
                                            />
                                            <p>{stat.label}</p>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </BrandBox>
                    </Col>
                </Row>
            </Container>
        </BrandSection>
    );
};

const AnimatedCounter = ({ targetValue }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000; // Animation duration in ms
        const stepTime = Math.abs(Math.floor(duration / targetValue));

        const timer = setInterval(() => {
            start += 1;
            if (start > targetValue) {
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [targetValue]);

    return <h2>{count}+</h2>;
};

AnimatedCounter.propTypes = {
    targetValue: PropTypes.number.isRequired,
};

BrandArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(
            PropTypes.shape({
                level: PropTypes.string,
                content: PropTypes.string,
            })
        ),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                fields: PropTypes.shape({
                    slug: PropTypes.string,
                }),
                images: PropTypes.arrayOf(
                    PropTypes.shape({
                        src: PropTypes.oneOfType([
                            PropTypes.string,
                            PropTypes.shape({}),
                        ]).isRequired,
                        alt: PropTypes.string,
                    })
                ),
                alt: PropTypes.string,
            })
        ),
    }),
};

export default BrandArea;
