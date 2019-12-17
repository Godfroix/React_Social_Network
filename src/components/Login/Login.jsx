import React from 'react';
import LoginCss from './Login.module.css';
import LoginReduxForm from './LoginForm';
import { login } from '../../static/auth_reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div >
            <h1 className={LoginCss.head}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);