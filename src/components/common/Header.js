import React, { useContext } from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Button,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { ShoppingCart, WbSunny, Apple } from "@material-ui/icons";

import { Link, useLocation } from "react-router-dom";

import { ProductContext } from "../../context/ProductContext";

import useStyles from "../style";

export default function Header() {
  const classes = useStyles();
  const [products, setProducts, addtoCart, cart] = useContext(ProductContext);

  const location = useLocation();

  return (
    <>
      <AppBar position="sticky" className={classes.appBar} color="inherit">
        <Toolbar>
          <Apple fontSize="large" />
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            MacShop
          </Typography>

          <div className={classes.grow}>
            <div className={classes.button}>
              {location.pathname === "/" ? (
                <IconButton
                  component={Link}
                  to="/cart"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <Badge badgeContent={cart.total_items} color="primary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/"
                >
                  Back
                </Button>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
