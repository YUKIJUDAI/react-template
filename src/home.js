import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { flag: false };
        this.exit = this.exit.bind(this);
    }

    exit() {
        this.setState({ flag: true });
    }

    render() {
        if (this.state.flag) return <Redirect to={"/login"} />;
        return (
            <div>
                this is home page;
                <br />
                <button onClick={this.exit}> 退出 </button>
            </div>
        );
    }
}
