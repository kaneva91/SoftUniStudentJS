import React, { useContext, useState } from "react";
import { Form } from "react-final-form";
import { Redirect } from 'react-router-dom';

import styles from '../../shared/styles/RegisterAndLogin.module.css';
import { UserContext} from '../../ContextWrapper';

import InputField from '../../shared/InputField';
import userServices from '../../../services/user-services';


function Login() {

  const [user, setUserStatus] = useContext(UserContext);
  const [error, setErroStatus] = useState('');

  const onSubmit = values => {
    const { username, password } = values;
    const data = { username, password };

    userServices.login(data)
      .then((data) =>
        setUserStatus({ loggedIn: true, userId: data._id, name: `${data.firstName} ${data.lastName}!` }))
      .catch(error => setErroStatus('Invalid username or password!'))
  };

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
      render={({ handleSubmit, submitting }) => (

        <form className={styles['Form-Wrapper']}>
          <InputField name="username" label={'Username:'} placeholder={'Username'} type='text' />
          <InputField name="password" label={'Password:'} type='password' placeholder={'Password'} />

          <div className={styles['fetch-error']}>
            {error ? error : ""}
          </div>
          <div className="button">
            <button onClick={(event) => { event.preventDefault(); handleSubmit(); }} disabled={submitting}>
              Login
            </button>
            {
              user.loggedIn ?
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


export default Login;