import PropTypes from "prop-types";
import { Accordion } from "react-bootstrap";
import { FaqListItem } from "./style";
const OnlineStoreList = ({ numberItem, title, description }) => {
    return (
        <FaqListItem>
            <Accordion.Item eventKey={`${numberItem}`}>
                <Accordion.Header>
                    <span>
                        {numberItem}. {title}
                    </span>
                </Accordion.Header>
                <Accordion.Body>
                    <p>{description}</p>
                </Accordion.Body>
            </Accordion.Item>
        </FaqListItem>
    );
};
FaqList.propTypes = {
    title: PropTypes.string,
    numberItem: PropTypes.number,
    description: PropTypes.string,
};
export default OnlineStoreList;
