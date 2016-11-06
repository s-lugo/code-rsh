import React, { PropTypes as T } from 'react';
import AuthService from '../utils/AuthService';

const Login = (props) => {
    const { auth } = props;
    return (
        <div >
            <h2>Login</h2>
            <button onClick={auth.login}>Login</button>
        </div>
    )
}

export default Login;