import React, { Component, Fragment } from "react";
import { Form } from "react-final-form";
import { Redirect } from 'react-router-dom';

import styles from '../shared/styles/RegisterAndLogin.module.css';

import InputField from '../shared/InputField';
import userServices from '../../services/user-services';


class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hasLogged: false,
      fetchError: ''
    }
  }

  onSubmit = values => {
    const { username, password } = values;
    const data = { username, password };

    userServices.login(data)
      .then(() => this.setState({ hasLogged: true }))
      .catch(error => {
        console.log(error)
        this.setState({fetchError: 'Invalid username or password.'})
      })
  };

  render() {
    const { hasLogged, fetchError } = this.state;
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
        render={({ handleSubmit, submitting, values}) => (

          <form className={styles['Form-Wrapper']}>
            <InputField name="username" label={'Username:'} placeholder={'Username'} type='text' />
            <InputField name="password" label={'Password:'} type='password' placeholder={'Password'} />

            <div className={styles['fetch-error']}>
              {fetchError && <Fragment>{fetchError}</Fragment>}
            </div>

            <div className="button">
              <button onClick={(event) => { event.preventDefault(); handleSubmit(); }} disabled={submitting}>
                Login
            </button>
              {
                hasLogged ?
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

