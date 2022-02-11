import React from 'react';
import { Switch, Route } from "react-router";

const App = () => {
    return (
        <Switch>
            <Route path='/' render={props => (
                <Home {...props} />
            )}
            />
        </Switch>
    )
}
export default App;