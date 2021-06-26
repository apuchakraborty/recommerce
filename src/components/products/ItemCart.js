import React, { useContext } from "react";

import { Container, Grid, Typography, Button } from "@material-ui/core";
import { ProductContext } from "../../context/ProductContext";

import Cart from "./Cart";
import useStyles from "../style";

export default function ItemCart() {
  const [
    products,
    setProducts,
    addtoCart,
    cart,
    deleteCart,
    EmptyallCart,
    handleUpdateCartQty,
  ] = useContext(ProductContext);
  const classes = useStyles();

  //   console.log(cart.line_items)

  const EmptyCart = () => <Typography varaint="h3">No Items</Typography>;

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <Cart
              item={item}
              deleteCart={deleteCart}
              handleUpdateCartQty={handleUpdateCartQty}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.app_checkout}>
        <div>
          <Typography variant="h5">
            Subtotal : {cart.subtotal.formatted_with_symbol}
          </Typography>
        </div>

        <div>
          <Button
            onClick={EmptyallCart}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            size="large"
            type="button"
            variant="contained" color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return "Loading...";
  return (
    <div className={classes.app__cartpage}>
    <Container maxWidth="md">
      <div>
        <Typography variant="h4" component="h2">
          Your Shopping cart
        </Typography>

        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </div>
    </Container>
    </div>
  );
}
