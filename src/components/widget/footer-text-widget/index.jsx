/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import LogoWhite from "../../logo-white";
import { TextWidgetBox, AddressUl, InfoList, Icon, InfoLink } from "./style";
import { Container } from "react-bootstrap";

const TextWidget = ({ infoData }) => {
    return (
        <Container>
            {/* <LogoWhite /> */}
            {/* <AddressUl sx={{ mt: "30px" }}>
                {infoData.list.map((item) => (
                    <InfoList key={item.id}>
                        <Icon>
                            <i className={item.icon}></i>
                        </Icon>
                        <InfoLink href={item.link}>{item.text}</InfoLink>
                    </InfoList>
                ))}
            </AddressUl> */}
        </Container>
    );
};
TextWidget.propTypes = {
    infoData: PropTypes.shape({
        list: PropTypes.arrayOf(PropTypes.shape({})),
    }),
};
export default TextWidget;
