import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { createStore } from "redux";

import Login from "./login";
import Home from "./home";

const state = () => {
    return {
        userInfo: { username: "", passworld: "" }
    };
};

const store = createStore(state);

class Basic extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <BrowserRouter basename="/home">
                <div>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/home" component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Basic />, document.getElementById("root"));
