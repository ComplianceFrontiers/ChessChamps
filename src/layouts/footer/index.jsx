/* eslint-disable prettier/prettier */
/** @jsx jsx */
import { Link } from "gatsby";
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
 

<style jsx>{`
    @keyframes move-line {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }
    @keyframes pulse-star {
        0%, 100% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.5);
            opacity: 0.5;
        }
    }

    .terms-link {
        font-size: 13px;
        display: inline-block;
        border-bottom: 1px solid white;
        padding: 8px 12px;
        color: #fff;
        font-family: Arial, sans-serif;
        text-transform: uppercase;
        letter-spacing: 1px;
        position: relative;
        z-index: 1;
        cursor: pointer;
        transition: transform 0.3s ease, color 0.3s ease;
    }

    /* Mobile View Styling */
    @media (max-width: 768px) {
        .terms-link {
            font-size: 8px; /* Reduce font size for smaller screens */
        }
    }
`}</style>


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
            All Rights Reserved.{" "}
            <a
                href="https://hotel-booking-website-chi.vercel.app/tandc" // Replace with the actual URL of your privacy policy
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline", color: "inherit" }}
            >
                Privacy Policy
            </a>
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
