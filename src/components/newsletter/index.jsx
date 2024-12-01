/* eslint-disable prettier/prettier */
import { useState } from "react";
import Button from "../../components/shared/button";
import { NewsLetterBox, Form, Input } from "./style";

const NewsLetter = () => {
    const [email, setEmail] = useState("");

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
                body: JSON.stringify({ email,Website:true }),
            });

            if (response.ok) {
                const data = await response.json();
                alert("Thank You For Subscribing");
            } else {
                const error = await response.json();
                alert( "Failed to subscribe.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again later.");
        }
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
        </NewsLetterBox>
    );
};

export default NewsLetter;
