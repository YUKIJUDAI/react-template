import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./reducer";
import Login from "./login";
import Home from "./home";


class Basic extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter basename="/">
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/home" component={Home} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<Basic />, document.getElementById("root"));
