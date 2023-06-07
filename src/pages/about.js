import React from "react";
import SEO from "../components/seo";
import InfoPage from "../components/infoPage";
import { GatsbyImage } from "gatsby-plugin-image";
import useContentfulConclaveStructureEntries from "../hooks/useContentfulConclaveStructureEntries";
import * as aboutStyles from "../css/about.module.css";

export default function Activities() {
    const structureEntries = useContentfulConclaveStructureEntries();

    return (
        <InfoPage title={"About"} description={"The weekend"}>
            <div className={aboutStyles.about}>
                <h1>What is Conclave?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium earum incidunt molestiae nam odio, optio pariatur quaerat. Alias beatae culpa eos ipsum quod quos vero. Debitis ea magnam magni rem.</p>
            </div>
            <h1 className={aboutStyles.structureTitle}>Structure</h1>
            <div className={aboutStyles.structure}>
                {structureEntries.map(({ node }) => (
                    <div>
                        <div className={aboutStyles.structureEntryContent}>
                            {
                                node.url ? <h2><a target={"__blank"} href={node.url}>{node.name} <span>🔗</span></a></h2>
                                    : <h2>{node.name}</h2>
                            }
                            <p>{node.description?.description}</p>
                        </div>
                        <GatsbyImage className={aboutStyles.structureEntryImage} image={node.image?.gatsbyImageData} alt={node.name} />
                    </div>
                ))}
            </div>
        </InfoPage>
    );
}

export const Head = () => (
    <SEO title={"About"} />
);