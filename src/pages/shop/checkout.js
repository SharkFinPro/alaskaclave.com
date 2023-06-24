import React, { useEffect, useState } from "react";
import SEO from "../../components/seo";
import Footer from "../../components/footer";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as checkoutStyles from "../../css/checkout.module.css";

function CartItem({ product, count, size, removeProduct, updateProductCount }) {
  const [currentCount, setCurrentCount] = useState(count);

  useEffect(() => {
    updateProductCount(product.name, size, currentCount);
  }, [currentCount]);

  if (!count) {
    return;
  }

  function remove() {
    updateProductCount(product.name, size);
  }

  function add() {
    setCurrentCount(currentCount + 1);
  }

  function subtract() {
    if (currentCount < 0) {
      return;
    }

    setCurrentCount(currentCount - 1);
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
      <div className={checkoutStyles.cartItemCount}>
        <p>Total: ${currentCount * product.price}</p>
        <div className={checkoutStyles.cartItemCountAmount}>
          <p>Amount</p>
          <p className={checkoutStyles.cartItemCountInteractable}>
            <button onClick={subtract}>-</button>
            <span>{currentCount}</span>
            <button onClick={add}>+</button>
          </p>
        </div>
      </div>
    </div>
  )
}

function Cart({ products, cart, setCart }) {
  function updateCart() {
    let currentCart = JSON.parse(localStorage.getItem("cart"));
    if (!currentCart) {
      currentCart = {};
    }

    setCart(currentCart);
  }

  useEffect(() => {
    updateCart();
  }, []);

  function updateProductCount(productName, size, count) {
    let currentCart = {...cart};

    if (size) {
      currentCart[productName][size] = count;
    } else {
      currentCart[productName] = count;
    }

    localStorage.setItem("cart", JSON.stringify(currentCart));
    updateCart();

  }

  return (
    <div className={checkoutStyles.cart}>
      {Object.keys(cart).map((cartItem) => {
        if (typeof cart[cartItem] === "number") {
          return <CartItem
            product={products.find((p) => p.node.name === cartItem).node}
            count={cart[cartItem]}
            size={false}
            updateProductCount={updateProductCount}
            key={cartItem} />
        } else {
          return Object.keys(cart[cartItem]).map((cartItemSize) => (
            <CartItem
              product={products.find((p) => p.node.name === cartItem).node}
              count={cart[cartItem][cartItemSize]}
              size={cartItemSize}
              updateProductCount={updateProductCount}
              key={cartItemSize}/>
          ));
        }
      })}
    </div>
  )
}

export default function Checkout() {
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

  const [cart, setCart] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  function updateTotalPrice() {
    let total = 0;
    for (let item in cart) {
      if (typeof cart[item] === "number") {
        total += cart[item] * products.find((p) => p.node.name === item).node.price;
      } else {
        for (let itemSize in cart[item]) {
          total += cart[item][itemSize] * products.find((p) => p.node.name === item).node.price;
        }
      }
    }

    setTotalPrice(total);
  }

  useEffect(() => {
    updateTotalPrice();
  }, [cart]);

  return <>
    <div className={checkoutStyles.container}>
      <h1>Checkout</h1>
      <Cart products={products} cart={cart} setCart={setCart} />
      <h2 className={checkoutStyles.totalPrice}>Total: ${totalPrice}</h2>
      <div className={checkoutStyles.userInfoContainer}>
        <div className={checkoutStyles.userInfo}>
          <div className={checkoutStyles.userInfoData}>
            <label>Name</label>
            <input/>
          </div>
          <div className={checkoutStyles.userInfoData}>
            <label>Email</label>
            <input type={"email"} />
          </div>
          <div className={checkoutStyles.userInfoData}>
            <label>Phone Number</label>
            <input type={"tel"}/>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
}

export const Head = () => (
  <SEO title={"Checkout"} />
);