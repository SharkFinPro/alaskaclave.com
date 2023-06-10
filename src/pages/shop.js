import React from "react";
import SEO from "../components/seo";
import InfoPage from "../components/infoPage";
import * as shopStyles from "../css/shop.module.css";
import { graphql, useStaticQuery } from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";

export default function Shop() {
    const { allContentfulTradingPostProduct } = useStaticQuery(graphql`
    query {
        allContentfulTradingPostProduct {
            edges {
                node {
                    name
                    description {
                        description
                    }
                    price
                    image {
                        gatsbyImageData
                    }
                }
            }
        }
    }`);

    const products = allContentfulTradingPostProduct.edges;

    return (
        <InfoPage title={"Shop"} description={"Preorder items from the Trading Post!"}>
            <div className={shopStyles.productsViewer}>
                <h1>Products</h1>
                <div className={shopStyles.productsDisplay}>
                    {products.map(({ node }) => (
                        <div className={shopStyles.productCard} key={node.name}>
                            <GatsbyImage className={shopStyles.productCardImage} image={node.image?.gatsbyImageData} alt={node.name} />
                            <p className={shopStyles.productCardPrice}>${node.price}</p>
                            <h1 className={shopStyles.productCardName}>{node.name}</h1>
                            <p className={shopStyles.productCardDescription}>{node.description?.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </InfoPage>
    )
}

export const Head = () => (
    <SEO title={"Shop"} />
);