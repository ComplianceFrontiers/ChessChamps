/* eslint-disable prettier/prettier */
/** @jsx jsx */
import { jsx } from "theme-ui";
import HeartIcon from "@assets/images/svg/footer.svg";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import TextWidget from "../../components/widget/footer-text-widget";
import ServiceMenuWidget from "../../components/widget/footer-service-menu-widget";
import InformationMenuWidget from "../../components/widget/footer-information-menu-widget";
import FollowUsWidget from "../../components/widget/footer-follow-us-widget";
import { StaticImage } from "gatsby-plugin-image";
import NewsletterWidget from "../../components/widget/newsletter-widget";
import {
    FooterWrap,
    FooterTop,
    FooterRow,
    FooterCol,
    FooterWidget,
    FooterBottom,
    CopyrightText,
} from "./style";

const Footer = ({ data }) => {
    return (
        <FooterWrap>
            <FooterTop>
                
                 <Container>
                 <div
      style={{
        padding: "25px", // Add padding around the widget
       
      }}
    >
      <NewsletterWidget />
    </div>
                                 <TextWidget infoData={data.footer[0]} />
             
                 </Container>
             </FooterTop>

            <FooterBottom>
                <Container sx={{ textAlign: "center" }}>
                    <CopyrightText>
                        Copyright &copy; {new Date().getFullYear()} Made with{" "}
                        <i className="icofont-heart"></i> by{" "}
                        <a
                            href={data.footer[4].link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {data.footer[4].title}
                        </a>{" "}
                        All Rights Reserved
                    </CopyrightText>
                </Container>
            </FooterBottom>
        </FooterWrap>
    );
};
Footer.propTypes = {
    data: PropTypes.shape({
        footer: PropTypes.arrayOf(
            PropTypes.shape({
                link: PropTypes.string,
                title: PropTypes.string,
            })
        ),
    }),
};
export default Footer;
