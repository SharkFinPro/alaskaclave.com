import React from "react";
import * as exploreStyle from "../css/explore.module.css";
import useContentfulPageDescriptions from "../hooks/useContentfulPageDescriptions";

export default function Explore() {
    const pageDescriptions = useContentfulPageDescriptions();

    return (
        <section className={exploreStyle.explore}>
            <section className={exploreStyle.container}>
                {pageDescriptions.map(({ node }) => (
                    <div className={exploreStyle.card}>
                        <h1>{node.page}</h1>
                        <p>{node.description?.description}</p>
                        <a className={exploreStyle.btn} href={`/${node.page.toLowerCase()}`}>Learn More</a>
                    </div>
                ))}
            </section>
        </section>
    );
}