import React from 'react';
import LoginCss from './Login.module.css';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
    console.log('rerender')
    return (
        <>
            <form onSubmit={props.handleSubmit} className={LoginCss.form}>
                <div>
                    <Field placeholder={'Login'} component={'input'} name={'login'} className={LoginCss.login} />
                </div>
                <div>
                    <Field placeholder={'Password'} component={'input'} name={'password'} className={LoginCss.password} />
                </div>
                <div>
                    <Field type={'checkbox'} component={'input'} name={'rememberMe'} className={LoginCss.rememberMe} /> remember me
                </div>
                <div>
                    <button className={LoginCss.loginBtn}>Login</button>
                </div>
            </form>
        </>
    )
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


export default LoginReduxForm;