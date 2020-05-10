import React from "react";

import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
