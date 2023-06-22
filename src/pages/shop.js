import React from "react";
import SEO from "../components/seo";
import InfoPage from "../components/infoPage";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as shopStyles from "../css/shop.module.css";

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
    }
  `);

  const products = allContentfulTradingPostProduct.edges;

  return (
    <InfoPage title={"Shop"} description={"Preorder items from the Trading Post!"}>
      <div className={shopStyles.productsViewer}>
        <h1>Products</h1>
        <div className={shopStyles.productsDisplay}>
          {products.map(({ node }) => (
            <div key={node.name}>
              <div className={shopStyles.productCard}>
                {/*<GatsbyImage className={shopStyles.productCardImage} image={node.image?.gatsbyImageData} alt={node.name} />*/}
                <GatsbyImage className={shopStyles.productCardImage} image={products[0].node.image?.gatsbyImageData} alt={node.name} />
                <div className={shopStyles.productCardText}>
                  <h1 className={shopStyles.productCardName}>{node.name}<span className={shopStyles.productCardPrice}>${node.price}</span></h1>
                  <p className={shopStyles.productCardDescription}>{node.description?.description}</p>
                </div>
                <div className={shopStyles.productCardCart}>
                  <button>Add to Cart</button>
                </div>
              </div>
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