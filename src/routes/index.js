import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "../Components/PageNotFound";
import LoginPage from "./LoginPage"

const Routes = () => (
    <div>
        <Switch>
            <Route path="/login" exact component={LoginPage} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    </div>
);

export default Routes;
