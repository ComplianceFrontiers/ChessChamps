/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import SectionTitle from "../../../components/title";
import { WorkingProcessSection } from "./style";
import SingleBrand from "../../../components/brand";
import Button from "../../../components/shared/button";

const WorkingProcessArea = ({ data }) => {
    return (
        <WorkingProcessSection>
            {/* <Container> */}
                {data?.section_title && (
                    <SectionTitle
                        headingTitle={data?.section_title.title}
                        {...data.section_title}
                    />
                )}
                  <a href="https://chess-in-school.vercel.app/portalhome" style={{ textDecoration: 'none' }}>
    <Button size="medium" shape="rounded10">
        Chess Champs Academy
    </Button>
</a>



               
            {/* </Container> */}
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
