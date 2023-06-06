import * as infoPageStyles from "../css/infoPage.module.css";
import Footer from "./footer";
import React from "react";

export default function InfoPage({ title, description, children }) {
    return <div className={infoPageStyles.wrapper}>
        <div className={infoPageStyles.header}>
            <div className={infoPageStyles.container}>
                <div className={infoPageStyles.headerContent}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
        <div className={infoPageStyles.main}>
            <div className={infoPageStyles.container}>
                {children}
            </div>
        </div>
        <Footer />
    </div>
}