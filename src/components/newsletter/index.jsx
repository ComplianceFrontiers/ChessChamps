/* eslint-disable prettier/prettier */
import { useState } from "react";
import Button from "../../components/shared/button";
import { NewsLetterBox, Form, Input, LoadingContainer } from "./style";
import Model from "../model";
import Loading from "../../data/loading/loading.gif";

const NewsLetter = () => {
    const [email, setEmail] = useState("");
    const [showModel, setShowModel] = useState(false); // State to control Model visibility
    const [loading, setLoading] = useState(false); // State for loading indicator

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        if (!email) {
            alert("Please enter your email");
            return;
        }

        setLoading(true); // Show loading GIF

        try {
            const response = await fetch("https://backend-chess-tau.vercel.app/masterlist_bp_submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, Website: true }),
            });
            const response1 = await fetch("https://backend-chess-tau.vercel.app/send-email-form-website-joined", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                const data = await response.json();
                setShowModel(true); // Show Model when subscription is successful
            } else {
                const error = await response.json();
                alert("Failed to subscribe.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setLoading(false); // Hide loading GIF
        }
    };

    // Close modal function
    const closeModal = () => {
        setShowModel(false); // Close the modal by updating the state
    };

    return (
        <NewsLetterBox>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    required=""
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update state
                />
                <Button
                    type="submit" // Set type as submit to trigger form submission
                    shape="rounded10"
                    className="btn-absolute"
                    disabled={loading} // Disable button while loading
                >
                    {loading ? "Submitting..." : "Join Us"}
                </Button>
            </Form>

            {/* Display loading GIF */}
            {loading && (
                <LoadingContainer>
                    <img src={Loading} alt="Loading..." />
                </LoadingContainer>
            )}

            {/* Conditionally render the Model component */}
            {showModel && <Model onClose={closeModal} />}
        </NewsLetterBox>
    );
};

export default NewsLetter;
