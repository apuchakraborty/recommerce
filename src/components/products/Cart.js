import React from 'react'

import {
    Card,
    CardActions,
    CardMedia,
    Button,
    CardContent,
    Typography,
    Snackbar
  } from "@material-ui/core";
  
  // import AddItemtoCart from './AddItemtoCart'
  import { Clear, Add } from "@material-ui/icons";

import useStyles from "../style";


export default function Cart({item, deleteCart, handleUpdateCartQty}) {
  const classes = useStyles();

    return (
        <>


             <Card className={classes.root} key={item.id}>
        <CardMedia className={classes.media} image={item.media.source} title="" />
        <CardContent>
          <div className={classes.CardContent}>
            <Typography variant="h6">
              {item.name}
            </Typography>

          </div>
            {/* <Typography variant="body2"> {item.price.formatted_with_symbol}</Typography> */}
          
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.app__quantitybtn}>
<Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)} >-</Button>
<Typography>{item.quantity}</Typography>
<Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}  >+</Button>
        </div>
        <div>
        <Button onClick={() => deleteCart(item.id)} type="button" varaint="contained" color="secondary">
          <Clear />
          </Button>
          </div>
        </CardActions>
      </Card>
        </>
    )
}
