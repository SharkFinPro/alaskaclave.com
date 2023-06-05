import React from "react";
import Footer from "../components/footer";
import SEO from "../components/seo";
import * as infoPageStyles from "../css/infoPage.module.css";
import * as logisticsStyles from "../css/logistics.module.css";

export default function Activities() {
    return <div className={infoPageStyles.wrapper}>
        <div className={infoPageStyles.header}>
            <div className={infoPageStyles.container}>
                <div className={infoPageStyles.headerContent}>
                    <h1>Logistics</h1>
                    <p>The details</p>
                </div>
            </div>
        </div>
        <div className={infoPageStyles.main}>
            <div className={infoPageStyles.container}>
                <div>
                    <h1>Logistics</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium earum incidunt molestiae nam odio, optio pariatur quaerat. Alias beatae culpa eos ipsum quod quos vero. Debitis ea magnam magni rem.</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export const Head = () => (
    <SEO title={"Logistics"} />
);