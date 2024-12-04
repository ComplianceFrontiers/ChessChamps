/* eslint-disable prettier/prettier */
import { useState } from "react";
import Button from "../../components/shared/button";
import { NewsLetterBox, Form, Input } from "./style";
import Model from "../model";

const NewsLetter = () => {
    const [email, setEmail] = useState("");
    const [showModel, setShowModel] = useState(false); // State to control Model visibility

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        if (!email) {
            alert("Please enter your email");
            return;
        }

        try {
            const response = await fetch("https://backend-chess-tau.vercel.app/signup_bulk_only_email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, Website: true }),
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
                >
                    Join Us
                </Button>
            </Form>

            {/* Conditionally render the Model component */}
            {showModel && <Model onClose={closeModal} />}
        </NewsLetterBox>
    );
};

export default NewsLetter;
