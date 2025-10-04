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
    console.log("Name:", name);

    // Mapping of names to their respective links
    const nameToLink = {
        // "Delaware Chess Association": "https://delawarechessassociation.org/",
        "Lions International": "https://www.lionsclubs.org/en",
        "Seigel JCC Delaware": "https://www.siegeljcc.org/",
        "Lombardy Elementary School": "https://lombardy.brandywineschools.org/",
        "Mount Pleasant Elementary": "https://mpe.brandywineschools.org/",
        "Bellevue Community Center": "https://www.bellevuecc.org/",
    };

    const link = nameToLink[name]; // Get the link for the current name

    return (
        <TestimonialItem>
            <ClientProfile>
                {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <GatsbyImage image={getImage(image)} alt={name} />
                    </a>
                ) : (
                    <GatsbyImage image={getImage(image)} alt={name} />
                )}
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
