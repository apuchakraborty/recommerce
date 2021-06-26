import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, ProductList, ItemCart, Banner } from "./components";
import { ProductProvider } from "./context/ProductContext";

function App({ props }) {
  return (
    <Router>
      <div className="App">
        <ProductProvider>
          <Header />
          {/* <Banner /> */}

          <Switch>
            <Route exact path="/">
              <ProductList />
            </Route>
            <Route exact path="/cart">
              <ItemCart />
            </Route>
          </Switch>
        </ProductProvider>
      </div>
    </Router>
  );
}

export default App;
