import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Welcome from "./welcome/welcome";
import Search from "./search/search";
import About from "./about/about";
import Login from "./login/login";
import Register from "./register/register";
import Cart from "./cart/cart";
import Aux from "./hoc/Aux";
// import Order from "./Order/Order";

const Routes = () => (
    <Aux>
    <BrowserRouter>
        <Route>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/cart" component={Cart} />
        </Route>
    </BrowserRouter>
    </Aux>
);

export default Routes;
