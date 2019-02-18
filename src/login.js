import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "", loginFlag: false };
        this.setUserName = this.setUserName.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.submit = this.submit.bind(this);
    }
   
    setUserName(e) {
        this.setState({ username: e.target.value });
        console.log("the username changed to " + e.target.value);
    }

    setPassword(e) {
        this.setState({ password: e.target.value });
        console.log("the password changed to " + e.target.value);
    }

    submit() {
        if (this.state.username !== "admin" || this.state.password !== "admin") {
            window.alert("用户名或密码错误");
        } else {
            this.setState({ loginFlag: true });
        }
    }

    render() {
        if (this.state.loginFlag) return <Redirect to={"/home"} />;
        return (
            <form>
                <input placeholder="请输入用户名" value={this.state.username} onChange={this.setUserName} />
                <input placeholder="请输入密码" value={this.state.password} onChange={this.setPassword} />
                <button onClick={this.submit}> 登录 </button>
            </form>
        );
    }
}
