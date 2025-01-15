/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import axios from "axios";
import { FormWrapper, FormTitle, Form, Input, RedirectButton } from "./style";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        parent_first_name: "",
        parent_last_name: "",
        child_first_name: "",
        child_last_name: "",
        email: "",
        phone: "",
        location: "",
        WhatsApp: true, // WhatsApp field
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the data to send to the backend, including the WhatsApp field

        try {
            const response = await axios.post(
                "https://backend-chess-tau.vercel.app/form_Basics_Of_Chess_bp_submit", // Replace with the correct API endpoint URL if needed
                formData
            );

            window.location.href =
                "https://chat.whatsapp.com/DVS9leavkGO187Pmd8V2QM";
        } catch (error) {
            console.error("Error during form submission:", error);
            alert("There was an error submitting the form. Please try again.");
        }
    };

    return (
        <FormWrapper>
            <FormTitle>Join Our WhatsApp Group</FormTitle>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="parent_first_name"
                    placeholder="Parent's First Name"
                    value={formData.parent_first_name}
                    onChange={handleChange}
                />
                <Input
                    type="text"
                    name="parent_last_name"
                    placeholder="Parent's Last Name"
                    value={formData.parent_last_name}
                    onChange={handleChange}
                />
                <Input
                    type="text"
                    name="child_first_name"
                    placeholder="Child's First Name"
                    value={formData.child_first_name}
                    onChange={handleChange}
                />
                <Input
                    type="text"
                    name="child_last_name"
                    placeholder="Child's Last Name"
                    value={formData.child_last_name}
                    onChange={handleChange}
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                />
                <RedirectButton type="submit">
                    Submit and Join WhatsApp Group
                </RedirectButton>
            </Form>
        </FormWrapper>
    );
};

export default ContactForm;
