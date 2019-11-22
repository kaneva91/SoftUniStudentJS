import React from 'react';
import styles from '../shared/styles/Forms.module.css'

function Register(){
    return(
        <div className={styles.Register}>
            <h1>Register Page</h1>
            <form>
                <div className={styles['form-control']}>
                    <label>Email</label>
                    <input type="email"/>
                </div>
                <div className={styles['form-control']}>
                    <label>Password</label>
                    <input type="password"/>
                </div>
                <div className={styles['form-control']}>
                    <label>Re-Password</label>
                    <input type="password"/>
                </div>
                <div className={styles['form-control']}>
                    <label>Email</label>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register;
