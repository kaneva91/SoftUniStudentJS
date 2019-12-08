import React, { Component, Fragment } from "react";
import { Form } from "react-final-form";
import { Redirect } from 'react-router-dom';

import styles from '../shared/styles/RegisterAndLogin.module.css';

import InputField from '../shared/InputField';
import userServices from '../../services/user-services';



class Register extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hasRegistred: false,
      fetchError : ''
    }
  }

  onSubmit = values => {

    const { username, password, firstName, lastName, email } = values;
    const data = { username, password, firstName, lastName, email };

    userServices.register(data)
      .then(res => {
        this.setState({hasRegistred : true})
      }
      )
      .catch(err => {
        console.log(err)
        this.setState({fetchError: 'Something went wrong, please try again.'});
      })
  };


  render() {
    const{hasRegistred, fetchError} = this.state;
    return (
      <Form
        onSubmit={this.onSubmit}
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
        render={({ handleSubmit, submitting}) => (

          <form className={styles['Form-Wrapper']}>
            <InputField name="username" label={'username:'} placeholder={'Username'} type='text' />
            <InputField name="password" label={'password:'} type='password' placeholder={'Password'} />
            <InputField name="rePassword" label={'rePassword:'} placeholder={'Re-Password'} type='password' />
            <InputField name="firstName" label={'firstName:'} placeholder={'First Name'} type='text' />
            <InputField name="lastName" label={'lastName:'} placeholder={'Last Name'} type='text' />
            <InputField name="email" label={'email:'} type='email' placeholder={'mail@example.com'} />

            <div className={styles['fetch-error']}>
             { fetchError && <Fragment>{fetchError}</Fragment>}
            </div>

            <div className="button">
              <button onClick={(event) => { event.preventDefault(); handleSubmit(); }} disabled={submitting}>
                Register
              </button>
              {
              hasRegistred ? 
               <Redirect to='/login'/>
               :
               <Redirect to='/register'/>
              }
            </div>
          </form>
        )}
      />
    )
  }
}

export default Register;
