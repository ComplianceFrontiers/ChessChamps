/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { graphql, Link } from "gatsby";
import { normalizedData } from "@utils/functions";
import image1 from "../data/images/online/Blogimage.png";
import axios from "axios"; // For API calls
import Loading from "../data/loading/loading.gif"; // Import the loading gif

const FAQPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page.content || []);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [loading, setLoading] = useState(false); // New loading state
    const [formData, setFormData] = useState({
        email: "",
        parent_first_name: "",
        parent_last_name: "",
        child_first_name: "",
        child_last_name: "",
        phone: "",
        BasicsOfChess_Online: true,
        SchoolName:"online",
        onlinePurchase:false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "parent_first_name") {
            setFormData({
                ...formData,
                parent_first_name: value,
                child_first_name: value, // Sync with parent's first name
            });
        } else if (name === "parent_last_name") {
            setFormData({
                ...formData,
                parent_last_name: value,
                child_last_name: value, // Sync with parent's last name
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleImageClick = () => {
        window.location.href = " https://stan.store/ChessChamps/p/basics-of-chess";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true when form is submitted
        try {
            const response = await axios.post(
                "https://backend-chess-tau.vercel.app/form_Basics_Of_Chess_bp_submit",
                formData
            );
            const emailResponse = await axios.post(
                "https://backend-chess-tau.vercel.app/send_email_online_purchase_user_BOC_online",
                { email: formData.email }
            );
            console.log(response.data); // Handle success/failure based on response
            // Redirect to Stripe after successful submission
            window.location.href = "https://buy.stripe.com/00gg2DboddF50DudQQ";
            setIsPopupVisible(false); // Close the pop-up after submission
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setLoading(false); // Hide loading gif after the request is complete
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Set mobile flag based on width
        };

        handleResize(); // Check size on component mount
        window.addEventListener("resize", handleResize); // Listen for window resizing

        return () => {
            window.removeEventListener("resize", handleResize); // Cleanup event listener
        };
    }, []);

    const buttonStyle = {
        padding: isMobile ? "2px 4px" : "10px 20px", // Smaller padding for mobile
        fontSize: isMobile ? "9px" : "16px", // Smaller font size for mobile
        backgroundColor: "#007BFF",
        color: "#FFF",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold",
    };

    const registerButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#28A745", // Different background for the register button
    };

    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Blog" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Blog"
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "30px",
                    textAlign: "center",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        display: "inline-block",
                    }}
                >
                    <img
                        src={image1}
                        alt="FAQ Illustration"
                        style={{
                            maxWidth: "90%",
                            height: "auto",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        }}
                    />
                    
                </div>
                </div>
        </Layout>
    );
};

FAQPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query FAQPageQuery {
        allGeneral {
            nodes {
                section
                id
                menu {
                    ...Menu
                }
                footer {
                    ...Footer
                }
            }
        }
        page(title: { eq: "FAQPage" }, pageType: { eq: innerpage }) {
            content {
                ...PageContentAll
                section_title {
                    ...SectionTitle
                }
            }
        }
    }
`;

export default FAQPage;
