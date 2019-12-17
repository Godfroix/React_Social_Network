import React from 'react';
import LoginCss from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../Common/FormsControls/FormsControls';
import { requiredField } from '../../utils/validators/validators';
import FormsControlsCss from '../Common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit} className={LoginCss.form}>
                <div>
                    <Field placeholder={'Email'} component={Input} name={'email'} className={LoginCss.login} validate={[requiredField]} />
                </div>
                <div>
                    <Field placeholder={'Password'} component={Input} name={'password'} className={LoginCss.password} type='password' validate={[requiredField]} />
                </div>
                <div>
                    <Field type={'checkbox'} component={'input'} name={'rememberMe'} className={LoginCss.rememberMe} /> remember me
                </div>
                {props.error && <div className={FormsControlsCss.formSummaryError}>
                    {props.error}
                </div>
                }
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