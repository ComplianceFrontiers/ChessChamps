/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { graphql, Link } from "gatsby";
import { normalizedData } from "@utils/functions";
import image1 from "../data/images/basics-of-chess/1.png";
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
        New_Jersey_Masterclass: true,
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
        setIsPopupVisible(true);
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
            // Redirect to Stripe after successful submission
            window.location.href = "https://buy.stripe.com/dR6eYa9C28ricaA4gq";
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
            <SEO title="Events" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Basics of Chess"
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
                    <div
                        style={{
                            position: "absolute",
                            bottom: "2%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            display: "flex",
                            gap: "15px",
                        }}
                    >
                        <Link to="/training-curriculum">
                            <button className="faq-button">Skill Levels</button>
                        </Link>

                        <Link>
                            <button
                                className="faq-button register"
                                onClick={handleImageClick}
                            >
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {isPopupVisible && (
                <div
                    style={{
                        position: "fixed",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: "1000",
                        overflow: "auto",
                    }}
                    onClick={() => setIsPopupVisible(false)} // Close on outside click
                >
                    <div
                        style={{
                            background: "#fff",
                            padding: "30px",
                            borderRadius: "12px",
                            width: "100%",
                            maxWidth: "500px",
                            maxHeight: "80vh",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            fontFamily: "'Roboto', sans-serif",
                            overflowY: "auto",
                            position: "relative",
                        }}
                        onClick={(e) => e.stopPropagation()} // Prevent closing pop-up when clicking inside the form
                    >
                        <button
                            onClick={() => setIsPopupVisible(false)}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                background: "none",
                                border: "none",
                                color: "#000",
                                fontSize: "20px",
                                cursor: "pointer",
                            }}
                        >
                            ×
                        </button>
                        <h3
                            style={{
                                fontSize: "24px",
                                fontWeight: "600",
                                marginBottom: "20px",
                                textAlign: "center",
                            }}
                        >
                            Online Purchase Form
                        </h3>

                        {/* Show loading or form based on loading state */}
                        {loading ? (
                            <div style={{ textAlign: "center" }}>
                                <img src={Loading} alt="Loading..." />
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                style={{ maxWidth: "400px", margin: "0 auto" }}
                            >
                                {/* Form fields here */}
                                {/* Example: */}
                                <div style={{ marginBottom: "15px" }}>
                                    <label
                                        style={{
                                            fontWeight: "500",
                                            fontSize: "16px",
                                            marginBottom: "8px",
                                            display: "block",
                                        }}
                                    >
                                        First Name:{" "}
                                        <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="parent_first_name"
                                        value={formData.parent_first_name}
                                        onChange={handleInputChange}
                                        required
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            borderRadius: "8px",
                                            border: "1px solid #ccc",
                                            fontSize: "14px",
                                            outline: "none",
                                            transition: "border-color 0.3s",
                                        }}
                                    />
                                </div>

                                {/* Last Name Field */}
                                <div style={{ marginBottom: "15px" }}>
                                    <label
                                        style={{
                                            fontWeight: "500",
                                            fontSize: "16px",
                                            marginBottom: "8px",
                                            display: "block",
                                        }}
                                    >
                                        Last Name:{" "}
                                        <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="parent_last_name"
                                        value={formData.parent_last_name}
                                        onChange={handleInputChange}
                                        required
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            borderRadius: "8px",
                                            border: "1px solid #ccc",
                                            fontSize: "14px",
                                            outline: "none",
                                            transition: "border-color 0.3s",
                                        }}
                                    />
                                </div>

                                {/* Email Field (Required) */}
                                <div style={{ marginBottom: "15px" }}>
                                    <label
                                        style={{
                                            fontWeight: "500",
                                            fontSize: "16px",
                                            marginBottom: "8px",
                                            display: "block",
                                        }}
                                    >
                                        Email:{" "}
                                        <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            borderRadius: "8px",
                                            border: "1px solid #ccc",
                                            fontSize: "14px",
                                            outline: "none",
                                            transition: "border-color 0.3s",
                                        }}
                                    />
                                </div>

                                {/* Phone Field (Optional) */}
                                <div style={{ marginBottom: "15px" }}>
                                    <label
                                        style={{
                                            fontWeight: "500",
                                            fontSize: "16px",
                                            marginBottom: "8px",
                                            display: "block",
                                        }}
                                    >
                                        Phone (Optional):
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            borderRadius: "8px",
                                            border: "1px solid #ccc",
                                            fontSize: "14px",
                                            outline: "none",
                                            transition: "border-color 0.3s",
                                        }}
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    style={{
                                        backgroundColor: "#4CAF50",
                                        color: "white",
                                        padding: "10px 15px",
                                        border: "none",
                                        borderRadius: "8px",
                                        fontSize: "16px",
                                        cursor: "pointer",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    Submit and Pay
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
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
