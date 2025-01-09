import React, { useState } from "react";
import {
    FormWrapper,
    FormTitle,
    Form,
    Input,
    RedirectButton,
} from "./style";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        parentFirstName: "",
        parentLastName: "",
        childFirstName: "",
        childLastName: "",
        email: "",
        phone: "",
        location: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add any additional submission logic here
    };

    return (
        <FormWrapper>
            <FormTitle>Join Our WhatsApp Group</FormTitle>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="parentFirstName"
                    placeholder="Parent's First Name"
                    value={formData.parentFirstName}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="text"
                    name="parentLastName"
                    placeholder="Parent's Last Name"
                    value={formData.parentLastName}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="text"
                    name="childFirstName"
                    placeholder="Child's First Name"
                    value={formData.childFirstName}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="text"
                    name="childLastName"
                    placeholder="Child's Last Name"
                    value={formData.childLastName}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
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
                    required
                />
                {/* Use an <a> tag styled as a button for better compatibility */}
                <RedirectButton
                    as="a"
                    href="https://chat.whatsapp.com/DVS9leavkGO187Pmd8V2QM"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Submit and Join WhatsApp Group
                </RedirectButton>
            </Form>
        </FormWrapper>
    );
};

export default ContactForm;
