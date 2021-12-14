import React from "react";
import { LoginContext } from "./context";
import { When } from 'react-if';
export default class login extends React.Component {

    static contextType = LoginContext;
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    // handleUsername = (e) => {
    //     this.setState({ username: e.target.value })
    // }

    // handlePassword = (e) => {
    //     this.setState({ password: e.target.value })
    // }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();//not to refresh the page
        this.context.loginFunction(this.state.username, this.state.password);
    }

    render() {
        return (
            <>
                <When condition={!this.context.LoggedIn}>
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="username" type='text' name='username' onChange={this.handleChange} />
                        <input placeholder="password" type='password' name='password' onChange={this.handleChange} />
                        <button type="submit">login</button>
                    </form>
                </When>
                <When condition={this.context.LoggedIn}
                >
                    <div>
                        {this.context.user.email}
                    </div>
                    <button onClick={this.context.logoutFunction}>logout</button>
                </When>

            </>
        )
    }
}