import React from 'react';
import LoginCss from './Login.module.css';
import LoginReduxForm from './LoginForm';

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div >
            <h1 className={LoginCss.head}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;