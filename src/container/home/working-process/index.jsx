/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import SectionTitle from "../../../components/title";
import { WorkingProcessSection } from "./style";
import SingleBrand from "../../../components/brand";

const WorkingProcessArea = ({ data }) => {
    return (
        <WorkingProcessSection>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        headingTitle={data?.section_title.title}
                        {...data.section_title}
                    />
                )}
                <div className="image-container">
                    {data?.items &&
                        data?.items.map((item, i) => (
                            <div key={i} className="image-wrapper">
                                <SingleBrand
                                    brnadAffterImage={item.images?.[0].src}
                                     alt={item.images?.[0].alt}
                                />
                            </div>
                        ))}
                </div>
            </Container>
        </WorkingProcessSection>
    );
};

WorkingProcessArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            title: PropTypes.string,
            icon: PropTypes.shape({
                src: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
                alt: PropTypes.string,
            }),
        }),
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
                        src: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
                        alt: PropTypes.string,
                    })
                ),
            })
        ),
    }),
};

export default WorkingProcessArea;
