import React, { useState } from "react";
import SEO from "../components/seo";
import InfoPage from "../components/infoPage";
import { Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import useTradingPostProducts from "../hooks/useTradingPostProducts";
import * as shopStyles from "../css/shop.module.css";

function ProductCard({ node }) {
  const [selectedSize, selectSize] = useState(undefined);

  function addToCart() {
    let currentCart = JSON.parse(localStorage.getItem("cart"));
    if (!currentCart) {
      currentCart = {};
    }

    if (!currentCart[node.name]) {
      currentCart[node.name] = node.sizes
        ? node.sizes.reduce((a, v) => ({ ...a, [v]: 0}), {})
        : 0;
    }

    if (node.sizes) {
      currentCart[node.name][selectedSize]++;
    } else {
      currentCart[node.name]++;
    }

    localStorage.setItem("cart", JSON.stringify(currentCart));
    window.location.reload();
  }

  return (
    <div className={shopStyles.productCard}>
      {
        node.image
          ? <GatsbyImage className={shopStyles.productCardImage} image={node.image?.gatsbyImageData} alt={node.name} />
          : <StaticImage className={shopStyles.productCardImage} src={"../../static/images/NOT_FOUND.png"} alt={"Image not found"} />
      }
      <div className={shopStyles.productCardText}>
        <h5 className={shopStyles.productCardName}>
          <span>{node.name}</span>
          <span className={shopStyles.productCardPrice}>${node.price}</span>
        </h5>
        <p className={shopStyles.productCardDescription}>{node.description?.description}</p>
      </div>
      <div className={shopStyles.productCardCart}>
        <p className={shopStyles.productCardSizes}>
          {node.sizes?.map((size) => (
            <button
              key={node.name + size}
              className={`${selectedSize === size ? shopStyles.selectedSize : ""}`}
              onClick={() => selectSize(size)}>
              {size}
            </button>
          ))}
        </p>
        <button disabled={!selectedSize && node.sizes} onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default function Shop() {
  const products = useTradingPostProducts();

  return (
    <InfoPage title={"Shop"} description={"Preorder items from the Trading Post!"}>
      <h3 className={shopStyles.productsDisplayTitle}>Products</h3>
      <div className={shopStyles.productsDisplay}>
        {products.map(({ node }) => (
          <ProductCard node={node} key={node.name} />
        ))}
      </div>
      <p className={shopStyles.checkoutButton}><Link to={"/shop/checkout"}>Checkout</Link></p>
    </InfoPage>
  )
}

export const Head = () => (
  <SEO title={"Shop"} />
);