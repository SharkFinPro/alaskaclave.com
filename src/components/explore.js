import React from "react";
import * as exploreStyle from "../css/explore.module.css";
import { graphql, Link, useStaticQuery } from "gatsby";

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
    }
  `);

  const pageDescriptions = allContentfulInfoPageData.edges;

  return (
    <section className={exploreStyle.explore}>
      <section className={exploreStyle.container}>
        {pageDescriptions.map(({ node }) => (
          <div className={exploreStyle.card} key={node.page}>
            <h5>{node.page}</h5>
            <p>{node.homepageDescription?.homepageDescription}</p>
            <Link className={exploreStyle.btn} to={`/${node.page.toLowerCase()}`}>Learn More</Link>
          </div>
        ))}
      </section>
    </section>
  );
}