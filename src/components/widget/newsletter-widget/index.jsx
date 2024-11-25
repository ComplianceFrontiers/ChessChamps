/* eslint-disable prettier/prettier */
import React from "react";
import NewsLetter from "../../newsletter";
import SectionTitle from "../../../components/title";
import { NewsletterWidgetBox } from "./style";
const NewsletterWidget = () => {
    return (
        <NewsletterWidgetBox>
            <SectionTitle
                headingTitle="Join our Club"
                color="white"
                iconBg="primary"
            />
            <NewsLetter />
        </NewsletterWidgetBox>
    );
};

export default NewsletterWidget;
