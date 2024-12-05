/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Form, Input, Textarea } from "./style";
import Button from "../../components/shared/button";
import axios from "axios";

const MessageFrom = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        question: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://backend-chess-tau.vercel.app/submit_question_email",
                formData,
                { headers: { "Content-Type": "application/json" } }
            );
            if (response.status === 201) {
                alert("Question submitted successfully!");
            }
        } catch (error) {
            alert(`Error: ${error.response?.data?.error || "Submission failed"}`);
        }
    };

    return (
        <Form className="row gx-4" onSubmit={handleSubmit}>
            <Col sm={6}>
                <Input
                    className="form-control"
                    placeholder="Enter Your Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </Col>
            <Col sm={6}>
                <Input
                    className="form-control"
                    placeholder="Enter Your Email"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </Col>
            <Col sm={12}>
                <Input
                    className="form-control"
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
            </Col>
            <Col sm={12}>
                <Textarea
                    placeholder="Type your question"
                    className="form-control textarea-control"
                    name="question"
                    id="textarea"
                    cols="30"
                    rows="10"
                    value={formData.question}
                    onChange={handleChange}
                ></Textarea>
            </Col>
            <Col sm={12} className="button-container">
                <Button
                    size="large"
                    shape="rounded5"
                    type="submit"
                    className="btn-absolute"
                >
                    Submit
                    <i className="icofont-rounded-double-right"></i>
                </Button>
            </Col>
        </Form>
    );
};

export default MessageFrom;
