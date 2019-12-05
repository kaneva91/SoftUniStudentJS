import React, { Component } from "react";
import { Form } from "react-final-form";
import { Redirect } from 'react-router-dom';

import styles from '../shared/styles/RegisterAndLogin.module.css';

import InputField from '../shared/InputField';
import userServices from '../../services/user-services';




class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }

  onSubmit = values => {
    const { username, password } = values;
    const data = { username, password }
    userServices.login(data)
      .then(res => {
        console.log(res)
        this.setState({ isLoggedIn: true })
      })
      .catch(error => console.log(error))
  };

  render() {
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

              {
                this.state.isLoggedIn ?
                  <Redirect to='/' />
                  :
                  <Redirect to='/login' />
              }
            </div>
          </form>
        )}
      />
    )

  }
}

export default Login;

