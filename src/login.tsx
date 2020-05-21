import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect,Provider } from "react-redux";
import store from "./reducer";
import { bindActionCreators } from "redux";

export default class Login extends Component {

    readonly state = {
        username: "",
        password: "",
        loginFlag: false
    }

    constructor(props: any) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    setUser(type: string, e: any) {
        this.setState({ [type]: e.target.value });
        console.log("the " + type + " changed to " + e.target.value);
    }

    submit() {
        if (this.state.username !== "admin" || this.state.password !== "admin") {
            window.alert("用户名或密码错误");
        } else {
            this.setState({ loginFlag: true });
            this.props.changeUserInfo()
        }
    }

    render() {
        if (this.state.loginFlag) return <Redirect to={"/home"} />;
        return (
            <Provider store={store}>    
                <form>
                    <input placeholder="请输入用户名" value={this.state.username} onChange={this.setUser.bind(this, "username")} />
                    <input placeholder="请输入密码" value={this.state.password} onChange={this.setUser.bind(this, "password")} />
                    <button onClick={this.submit}> 登录 </button>
                </form>
            </Provider>
        );
    }
}

function changeUserInfo(){
    return {type:"CHANGE"};
}

function mapStateToProps(state:any) { 
    return {...state}
};

function mapDispatchToProps(dispatch:any){
    return bindActionCreators({changeUserInfo},dispatch);
};
connect(mapStateToProps,mapDispatchToProps)(Login);
