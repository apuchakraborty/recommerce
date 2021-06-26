import React, { useContext } from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { ProductContext } from "../../context/ProductContext";
import Products from "./Products";
import useStyles from "../style";

// backend commerce





export default function ProductList() {
  const classes = useStyles();

  const [products, setProducts, addtoCart, cart] = useContext(ProductContext);

console.log(cart)


  return (
    <main className={classes.app__productList}>
      <Container maxWidth="md">
        <div className={classes.app__heading}>
        <Typography variant="h3">Products</Typography>
        <Typography gutterBottom variant="body2">Our Latest Products</Typography>
        </div>
        <Grid container justify="center" spacing={1}>
          {products.map((product, index) => (
            <Grid item={true} xs={12} sm={6} md={4} lg={3} key={index}>
              <Products product={product} addtoCart={addtoCart}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
