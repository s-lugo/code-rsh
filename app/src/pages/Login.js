import React, { PropTypes as T } from 'react';
import AuthService from '../utils/AuthService';

const Login = (props) => {
    const { auth } = props;
    auth.login();
    return (
        <div >
        </div>
    )
}

export default Login;