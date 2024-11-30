/* eslint-disable prettier/prettier */
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { PageBreadcrumbWrap, PageTitleContent, BrandBox } from "./style";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";

const PageBreadcrumbHome = ({ title }) => {
    const stats = [
        { id: 1, value: 1000, label: "Tournament Experience" },
        { id: 2, value: 200, label: "Registered Club Members" },
        { id: 3, value: 50, label: "Years of Experience" }
    ];

    return (
        <PageBreadcrumbWrap>
            <Container className="page-breadcrumb-title">
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
                                            <p>{stat.label}</p>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </BrandBox>
                    </Col>
                </Row>
            </Container>
        </PageBreadcrumbWrap>
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

PageBreadcrumbHome.propTypes = {
    title: PropTypes.string,
};

export default PageBreadcrumbHome;
