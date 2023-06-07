import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Footer from "./footer";
import * as infoPageStyles from "../css/infoPage.module.css";

export default function InfoPage({ title, description, children }) {
    const { allContentfulInfoPageData } = useStaticQuery(graphql`
    query {
        allContentfulInfoPageData {
            edges {
                node {
                    id
                    introTitle
                    page
                    homepageOrder
                    homepageDescription {
                        homepageDescription
                    }
                    introContent {
                        introContent
                    }
                }
            }
        }
    }`);

    const pageData = allContentfulInfoPageData.edges.find(({ node }) => node.page === title);

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
                <div className={infoPageStyles.intro}>
                    <h1>{pageData.node.introTitle}</h1>
                    <p>{pageData.node.introContent?.introContent}</p>
                </div>
                {children}
            </div>
        </div>
        <Footer />
    </div>
}