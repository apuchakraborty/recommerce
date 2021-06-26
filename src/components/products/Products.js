import React from "react";
import {
  Card,
  CardActions,
  CardMedia,
  IconButton,
  CardContent,
  Typography,
} from "@material-ui/core";

// import AddItemtoCart from './AddItemtoCart'
import { AddShoppingCart } from "@material-ui/icons";



import useStyles from "../style";

export default function Products({ product, addtoCart }) {
  // console.log(product);
  const classes = useStyles();

  

  return (
      <Card className={classes.root} key={product.id}>
        <CardMedia className={classes.media} image={product.media.source} title="" />
        <CardContent>
          <div className={classes.CardContent}>
            <Typography variant="h6">
              {product.name}
            </Typography>

          </div>
            <Typography variant="body2"> {product.price.formatted_with_symbol}</Typography>

          {/* <Typography className={classes.CardDescriptin} variant="body2" color="textSecondary">
            {product.desc}
          </Typography> */}
          
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={() => addtoCart(product.id,1)}>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
  );
}
