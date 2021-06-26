import React, { useState, createContext, useEffect } from "react";
import { commerce } from ".././lib/commerce";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const addtoCart = async (productId, quantity) => {
    // alert('test');
    const item = await commerce.cart.add(productId, quantity);
    // console.log(item.cart.total_items);
    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const {cart} = await commerce.cart.update(lineItemId, { quantity });

    setCart(cart);
  };

  const deleteCart = async (productId) => {
    // alert(productId);
    const {cart} = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const EmptyallCart = async () => {
    const {cart} = await commerce.cart.empty();

    setCart(cart);
  };

  //   console.log(products);
  // console.log(cart);

  return (
    <ProductContext.Provider value={[products, setProducts, addtoCart, cart, deleteCart, EmptyallCart, handleUpdateCartQty]}>
      {props.children}
    </ProductContext.Provider>
  );
};
