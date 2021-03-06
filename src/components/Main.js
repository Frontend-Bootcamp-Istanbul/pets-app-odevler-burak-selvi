import React from 'react';
import { Route, Switch } from "react-router";
import { FavoritesPage, HomePage, DetayPage, NotFoundPage } from "../pages";

function Main(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/favoriler" component={FavoritesPage} />
                <Route exact path="/detay" component={DetayPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default Main;
