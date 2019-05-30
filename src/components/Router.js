import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import App from "../App";
import Recipe from "./Recipe";
import Details from "./Details"

const Router = () => (
    <BrowserRouter>
    <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/recipe/:id" component={Recipe}/>
        <Route path="/details" component={Details}/>
        </Switch>
    </BrowserRouter>
);

export default Router;