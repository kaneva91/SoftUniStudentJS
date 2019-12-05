import React from "react";
import { Form} from "react-final-form";
import { Redirect } from 'react-router-dom';

import styles from '../shared/styles/RegisterAndLogin.module.css';

import InputField from '../shared/InputField';


const onSubmit = values => {

 
};


function Login() {

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
        return errors;
      }}
      render={({ handleSubmit, submitting, values }) => (

        <form className={styles['Form-Wrapper']}>
          <InputField name="username" label={'Username:'} placeholder={'Username'} type='text' />
          <InputField name="password" label={'Password:'} type='password' placeholder={'Password'} />
          <div className="button">
            <button onClick={(event) => { event.preventDefault(); handleSubmit(); }} disabled={submitting}>
              Login
            </button>

          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  )
  
}

export default Login;

