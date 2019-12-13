import React from 'react';
import { Field } from 'react-final-form';


function ProfileField({ name, component, placeholder }) {
    
    return (
        <div>
            <label>{`${placeholder}: `}</label>
            <Field
                name={name}
                component={component}
                placeholder={placeholder}
            />
        </div>
    )
}

export default ProfileField;
