/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import { Link } from "gatsby"; // Importing Gatsby's Link component
import { graphql } from "gatsby";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { normalizedData } from "@utils/functions";
import image1 from "../data/images/delaware-chess-champs/13.png";
import image2 from "../data/images/delaware-chess-champs/14.png";
import axios from "axios"; // For API calls

const FAQPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page.content || []);
    
    // State to manage pop-up visibility and form data
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        parent_first_name: "",
        parent_last_name: "",
        child_first_name: "",
        child_last_name: "",
        phone: "", // Add phone field
        redirect_status: "Not started",
    });
   

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Sync parent and child names
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
        try {
            const response = await axios.post("https://backend-chess-tau.vercel.app/new_online_purchase_user", formData);
            console.log(response.data); // Handle success/failure based on response
            const response1 = await axios.post("https://backend-chess-tau.vercel.app/send_email_api_to_online_purchase_user", {
                email: formData.email,
            });
            window.location.href = "https://buy.stripe.com/bIYeYa5lM9vmcaAfZ7"; // Redirect to Stripe after successful submission
            setIsPopupVisible(false); // Close the pop-up after submission
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Delaware Chess Champs" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Delaware Chess Champs"
            />
<Link href="/training-curriculum">
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap", // Allows images to wrap to the next line
                    justifyContent: "center",
                    cursor:"pointer"
                }}
            >
                <img
                    src={image1}
                    alt="FAQ Illustration"
                    style={{
                        maxWidth: "90%",
                    }}
                />
            </div>
            </Link>

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
                        zIndex: "1000", // Ensure the popup is on top of other elements
                        overflow: "auto", // Allow scrolling if the popup content overflows
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
                            maxHeight: "80vh", // Limit the height of the popup
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            fontFamily: "'Roboto', sans-serif",
                            overflowY: "auto", // Allow vertical scrolling if content exceeds the height
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
                        <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "20px", textAlign: "center" }}>
                            Online Purchase Form
                        </h3>
                        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
    {/* First Name Field */}
    <div style={{ marginBottom: "15px" }}>
        <label
            style={{
                fontWeight: "500",
                fontSize: "16px",
                marginBottom: "8px",
                display: "block",
            }}
        >
            First Name: <span style={{ color: "red" }}>*</span>
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
            Last Name: <span style={{ color: "red" }}>*</span>
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
            Email: <span style={{ color: "red" }}>*</span>
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
            alignItems:"center",
            justifyContent: "center",
        }}
    >
        Procced to Payment
    </button>
</form>

                    </div>
                </div>
            )}
            {/* <Link href="/training-curriculum"> */}

<div  style={{
                    display: "flex",
                    flexWrap: "wrap", // Allows images to wrap to the next line
                    justifyContent: "center",
                    marginBottom:"20px",
                    cursor:"pointer"
                }}
                onClick={handleImageClick}

                
            >
                <img
                    src={image2}
                    alt="FAQ Illustration"
                    style={{
                        maxWidth: "90%",
                    }}
                    onClick={handleImageClick}
                />
            </div>
            {/* </Link> */}
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
