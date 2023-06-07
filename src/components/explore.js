import React from "react";
import * as exploreStyle from "../css/explore.module.css";
import {graphql, useStaticQuery} from "gatsby";

export default function Explore() {
    const { allContentfulInfoPageData } = useStaticQuery(graphql`
    query {
        allContentfulInfoPageData(sort: {homepageOrder: ASC}) {
            edges {
                node {
                    id
                    page
                    homepageDescription {
                        homepageDescription
                    }
                }
            }
        }
    }`);

    const pageDescriptions = allContentfulInfoPageData.edges;


    return (
        <section className={exploreStyle.explore}>
            <section className={exploreStyle.container}>
                {pageDescriptions.map(({ node }) => (
                    <div className={exploreStyle.card}>
                        <h1>{node.page}</h1>
                        <p>{node.homepageDescription?.homepageDescription}</p>
                        <a className={exploreStyle.btn} href={`/${node.page.toLowerCase()}`}>Learn More</a>
                    </div>
                ))}
            </section>
        </section>
    );
}