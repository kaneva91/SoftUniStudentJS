import React from "react";
import { Form, Field } from "react-final-form";
import userServices from '../../services/user-services';
import styles from './Register.module.css';
import { Redirect } from 'react-router-dom'
const onSubmit = values => {

  const {username, password, firstName, lastName, email} = values;

  const data =  {username, password, firstName, lastName, email};
 
   userServices.register(data)
  .then(res => console.log(res)

  //there should redirect but it not works

  //history.push('/')
  )
  .catch(err =>console.log(err)) 

};

const InputField = ({ name, label, type, placeholder }) => {
  return (<Field name={name} >
    {({ input, meta }) => (
      <div>
        <label>{label}</label>
        <input {...input} type={type} placeholder={placeholder} />
        <div className={styles.error}>  {meta.error && meta.touched ? `${meta.error}` : ""}</div>
      </div>
    )}
  </Field>)
}

function Register() {

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
      render={({ handleSubmit, submitting, values }) => (

        <form className={styles['Register-Form']}>
          <InputField name="username" label={'Username:'} placeholder={'Username'} type='text' />
          <InputField name="password" label={'Password:'} type='password' placeholder={'Password'} />
          <InputField name="rePassword" label={'Re-Password:'} placeholder={'Re-Password'} type='password' />
          <InputField name="firstName" label={'First Name:'} placeholder={'First Name'} type='text' />
          <InputField name="lastName" label={'Last Name:'} placeholder={'Last Name'} type='text' />
          <InputField name="email" label={'Email:'} type='email' placeholder={'mail@example.com'} />

          <div className="button">
            <button onClick={(event) => { event.preventDefault(); handleSubmit(); }} disabled={submitting}>
              Register
            </button>

          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  
  )
  
}

export default Register;

