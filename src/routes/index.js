import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "../App";
import PageNotFound from "../Components/PageNotFound";

const Routes = () => (
    <div>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    </div>
);

export default Routes;
