/* eslint-disable prettier/prettier */
import { Col } from "react-bootstrap";
import { Form, Input, Textarea } from "./style";
import Button from "../../components/shared/button";
const MessageFrom = () => {
    return (
        <Form className="row gx-4" action="#" method="POST">
            <Col sm={6}>
                <Input
                    className="form-control"
                    placeholder="Enter Your Name"
                    type="text"
                    name="name"
                />
            </Col>
            <Col sm={6}>
                <Input
                    className="form-control"
                    placeholder="Enter Your Email"
                    type="text"
                    name="email"
                />
            </Col>
            <Col sm={12}>
            <Input
                    className="form-control"
                    placeholder="Subject"
                    type="text"
                    name="subject"
                />
            </Col>
            <Col sm={12}>
                <Textarea
                    placeholder="Type your question"
                    className="form-control textarea-control"
                    name="message"
                    id="textarea"
                    cols="30"
                    rows="10"
                ></Textarea>
            </Col>
            <Col sm={12} className="button-container">
                <Button
                    size="large"
                    shape="rounded5"
                    path="/"
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
