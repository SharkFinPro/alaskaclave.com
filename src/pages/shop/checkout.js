import React from "react";
import SEO from "../../components/seo";
import Footer from "../../components/footer";
import { graphql, useStaticQuery } from "gatsby";
import * as checkoutStyles from "../../css/checkout.module.css";
import {GatsbyImage, StaticImage} from "gatsby-plugin-image";
import * as shopStyles from "../../css/shop.module.css";

function CartItem({ product, count, size }) {
  if (!count) {
    return;
  }

  return (
    <div className={checkoutStyles.cartItem}>
      {
        product.image
          ? <GatsbyImage className={checkoutStyles.cartItemImage} image={product.image?.gatsbyImageData} alt={product.name} />
          : <StaticImage className={checkoutStyles.cartItemImage} src={"../../../static/images/NOT_FOUND.png"} alt={"Image not found"} />
      }
      <h2 className={checkoutStyles.cartItemName}>{product.name}</h2>
      {
        size ? <p className={checkoutStyles.cartItemSize}>{size}</p> : <></>
      }
      <p className={checkoutStyles.cartItemCount}>Amount: {count}</p>
    </div>
  )
}

function Cart() {
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

  let currentCart = JSON.parse(localStorage.getItem("cart"));
  if (!currentCart) {
    currentCart = {};
  }

  return (
    <div className={checkoutStyles.cart}>
      {Object.keys(currentCart).map((cartItem) => {
        if (typeof currentCart[cartItem] === "number") {
          return <CartItem product={products.find((p) => p.node.name === cartItem).node} count={currentCart[cartItem]} size={false} key={cartItem} />
        } else {
          return Object.keys(currentCart[cartItem]).map((cartItemSize) => (
            <CartItem product={products.find((p) => p.node.name === cartItem).node} count={currentCart[cartItem][cartItemSize]} size={cartItemSize} key={cartItemSize}/>
        ));
        }
      })}
    </div>
  )
}

export default function Checkout() {
  return (
    <div>
      <h1>Checkout</h1>
      <Cart />
      <Footer />
    </div>
  )
}

export const Head = () => (
  <SEO title={"Checkout"} />
);