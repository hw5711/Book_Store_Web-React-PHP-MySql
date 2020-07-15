import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Welcome from "./welcome/welcome";
import Search from "./search/search";

const Routes = () => (
    <BrowserRouter>
        <Route>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/search" component={Search} />
        </Route>
    </BrowserRouter>
);

export default Routes;
