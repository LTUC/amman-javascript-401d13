import React from 'react';
import { LoginContext } from './context';
import { When } from 'react-if';
export default class Auth extends React.Component {
    static contextType = LoginContext;
    render() {
        const isLoggedIn = this.context.LoggedIn;
        const doHaveCapabilities = this.context.can(this.props.capability);
        return (
            <When condition={isLoggedIn && doHaveCapabilities}>
                {this.props.children}
            </When>
        )
    }
}