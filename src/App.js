import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./container/ProductListing";
import Header from "./container/Header";
import "./App.css";
import ProductDetails from "./container/ProductDetails";

function App() {
  return (
    <div className="App"> 
    <Router>

      <Header/>
      <Switch>
      <Route path="/" exact component= {ProductListing}/>
      <Route path="/product/:productId" exact component= {ProductDetails}/>
      <Route>404 Not Found</Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;