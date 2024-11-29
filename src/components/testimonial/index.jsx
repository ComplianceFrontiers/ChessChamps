/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import {
    TestimonialItem,
    ClientProfile,
    Quote,
    DescriptionText,
    ClientName,
    Designation,
} from "./style";
const Testimonial1 = ({ image, description, name, designation }) => {
    return (
        <TestimonialItem>
            <ClientProfile>
                <GatsbyImage image={getImage(image)} alt={name} />
                {/* <Quote>“</Quote> */}
            </ClientProfile>
            <ClientName>{name}</ClientName>
            <Designation>{designation}</Designation>

            <DescriptionText>{description}</DescriptionText>
            
        </TestimonialItem>
    );
};
Testimonial1.propTypes = {
    image: PropTypes.object,
    description: PropTypes.string,
    name: PropTypes.string,
    designation: PropTypes.string,
};
export default Testimonial1;
