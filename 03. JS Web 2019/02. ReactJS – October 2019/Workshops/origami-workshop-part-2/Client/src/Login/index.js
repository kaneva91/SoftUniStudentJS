import React from 'react';
import styles from '../shared/styles/Forms.module.css'

function Login(){
    return (
        <div className = {styles.Login}>
        <h1>Login Page</h1>
        <form>
            <div className = {styles['form-control']}>
            <label>Email</label>
            <input type='email'></input>
            </div>
            <div className = {styles['form-control']}>
            <label>Password</label>
            <input type='password'></input>
            </div>
            <div className = {styles['form-control']}>
          
            <button type='submin'>Login</button>
            </div>
        </form>
        </div>
    )
}

export default Login;