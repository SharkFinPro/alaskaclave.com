import React, { useState } from "react";
import SEO from "../components/seo";
import InfoPage from "../components/infoPage";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as shopStyles from "../css/shop.module.css";

function ProductCard({ node }) {
  const [selectedSize, selectSize] = useState(undefined);

  return (
    <div>
      <div className={shopStyles.productCard}>
        {
          node.image
            ? <GatsbyImage className={shopStyles.productCardImage} image={node.image?.gatsbyImageData} alt={node.name} />
            : <StaticImage className={shopStyles.productCardImage} src={"../../static/images/NOT_FOUND.png"} alt={"Image not found"} />
        }
        <div className={shopStyles.productCardText}>
          <h1 className={shopStyles.productCardName}>
            <span>{node.name}</span>
            <span className={shopStyles.productCardPrice}>${node.price}</span>
          </h1>
          <p className={shopStyles.productCardDescription}>{node.description?.description}</p>
        </div>
        <div className={shopStyles.productCardCart}>
          <p className={shopStyles.productCardSizes}>
            {node.sizes?.map((size) => (
              <button
                className={`${selectedSize === size ? shopStyles.selectedSize : ""}`}
                onClick={() => selectSize(size)}>
                {size}
              </button>
            ))}
          </p>
          <button disabled={!selectedSize && node.sizes}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

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
            sizes
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
            <ProductCard node={node} key={node.id} />
          ))}
        </div>
      </div>
    </InfoPage>
  )
}

export const Head = () => (
  <SEO title={"Shop"} />
);