import { Route, Switch } from "react-router";

const Routes = () => {
    return (
        <Switch>
            <Route exact to="/">
                <h1>Helloo</h1>
            </Route>
        </Switch>
    );
};

export default Routes;