import React, { useState } from "react";
import { Form } from "react-final-form";
import { Redirect } from 'react-router-dom';

import styles from '../../shared/styles/RegisterAndLogin.module.css';

import InputField from '../../shared/InputField';
import userServices from '../../../services/user-services';


function Register() {

  const [hasRegistred, setRegisterStatus] = useState(false);
  const [error, setErroStatus] = useState('');

  const onSubmit = values => {

    const { username, password, firstName, lastName, email } = values;
    const data = { username, password, firstName, lastName, email };

    userServices.register(data)
      .then(() => setRegisterStatus(true))
      .catch(() =>
        setErroStatus('Something went wrong, please try again.'))
  }



  return (
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {};
        if (!values.username) {
          errors.username = "Required!";
        }
        if (!values.password) {
          errors.password = "Required!";
        }
        if (!values.firstName) {
          errors.firstName = "Required!";
        }
        if (!values.lastName) {
          errors.lastName = "Required!";
        }
        if (!values.email) {
          errors.email = "Required!";
        }
        if (!values.rePassword) {
          errors.rePassword = "Required!";
        } else if (values.rePassword !== values.password) {
          errors.rePassword = "Both passwords must match!";
        }
        return errors;
      }}

      render={({ handleSubmit, submitting }) => (
        <form className={styles['Form-Wrapper']}>
          <InputField name="username" label={'Username'}  type='text' />
          <InputField name="password" label={'Password'} type='password'  />
          <InputField name="rePassword" label={'Re-Password'}  type='password' />
          <InputField name="firstName" label={'First Name'} type='text' />
          <InputField name="lastName" label={'Last Name'} type='text' />
          <InputField name="email" label={'Email'} type='email' placeholder={'mail@example.com'} />

          <div className={styles['fetch-error']}>
            {error ? error : ''}
          </div>

          <div className="button">
            <button onClick={(event) => { event.preventDefault(); handleSubmit(); }} disabled={submitting}>
              Register
              </button>
            {
              hasRegistred ?
                <Redirect to='/login' />
                :
                <Redirect to='/register' />
            }
          </div>
        </form>
      )}
    />)
}

export default Register;
