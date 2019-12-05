
import React from 'react';
import { Field } from "react-final-form";
import styles from '../styles/RegisterAndLogin.module.css';

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

export default InputField;