/* eslint-disable prettier/prettier */
import Button from "../../components/shared/button";
import { NewsLetterBox, Form, Input } from "./style";
const NewsLetter = () => {
    return (
        <NewsLetterBox>
            <Form action="#">
                <Input
                    type="text"
                    required=""
                    placeholder="Enter Your Email Address"
                />
                <Button
                    // size="large"
                    shape="rounded10"
                    path="/"
                    className="btn-absolute"
                >
                    Join Us
                 </Button>
            </Form>
        </NewsLetterBox>
    );
};

export default NewsLetter;
