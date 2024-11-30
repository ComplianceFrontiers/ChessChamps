/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import { BrandBox } from "./style";

const BrandArea = () => {
    const stats = [
        { id: 1, value: 1000, label: "Tournament Experience" },
        { id: 2, value: 200, label: "Registered Club Members" },
        { id: 3, value: 50, label: "Years of Experience" }
    ];

    return (
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
                                    >
                                        <AnimatedCounter
                                            targetValue={stat.value}
                                            startValue={stat.id === 1 ? 750 : 0}
                                        />
                                        <div>{stat.label}</div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </BrandBox>
                </Col>
            </Row>
        </Container>
    );
};

const AnimatedCounter = ({ targetValue, startValue = 0 }) => {
    const [count, setCount] = useState(startValue);

    useEffect(() => {
        let current = startValue;
        const duration = 2000; // Animation duration in ms
        const stepTime = Math.abs(Math.floor(duration / (targetValue - startValue)));

        const timer = setInterval(() => {
            current += 1;
            if (current > targetValue) {
                clearInterval(timer);
            } else {
                setCount(current);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [targetValue, startValue]);

    return <h2>{count}+</h2>;
};

AnimatedCounter.propTypes = {
    targetValue: PropTypes.number.isRequired,
    startValue: PropTypes.number,
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
