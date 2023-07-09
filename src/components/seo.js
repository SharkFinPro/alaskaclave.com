import React from "react";
import useSiteMetadata from "../hooks/use-site-metadata";
import { graphql, useStaticQuery } from "gatsby";

const SEO = ({ title, description, pathname, children }) => {
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
    }
  `);
  const pageDescription = allContentfulInfoPageData.edges.find(({ node }) => node.page === title)?.node?.homepageDescription?.homepageDescription;

  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata();

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: pageDescription || description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return <>
    <html lang="en" />
    <title>{seo.title}</title>
    <meta name="description" content={seo.description} />
    <meta name="image" content={seo.image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={seo.title} />
    <meta name="twitter:url" content={seo.url} />
    <meta name="twitter:description" content={seo.description} />
    <meta name="twitter:image" content={seo.image} />
    <meta name="twitter:creator" content={seo.twitterUsername} />
    {children}
  </>
};

export default SEO;