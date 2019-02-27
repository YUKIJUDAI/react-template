import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Login from "./login";
import Home from "./home";
import ErrorPage from "./404";

import "./index.css";

class Basic extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        
    }

    render() {
        return (
            <BrowserRouter basename="/">
                <div>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/home" component={Home} />
                        <Redirect to="/404" component={ErrorPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Basic />, document.getElementById("root"));
