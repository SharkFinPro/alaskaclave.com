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
      <h3 className={aboutStyles.structureTitle}>Structure</h3>
      <div className={aboutStyles.structure}>
        {structureEntries.map(({ node }) => (
        <div key={node.id}>
          <div className={aboutStyles.structureEntryContent}>
            {
            node.url ? <h5 className={aboutStyles.structureEntryTitle}>
                <a target={"__blank"} href={node.url}>{node.name} <span>🔗</span></a>
              </h5>
              : <h5 className={aboutStyles.structureEntryTitle}>{node.name}</h5>
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