import React, { Fragment, useContext, useState, useEffect } from 'react';
import { UserContext } from '../../ContextWrapper';
import { Redirect } from 'react-router-dom';
import userServices from '../../../services/user-services';
import { Form } from "react-final-form";
import ProfileField from '../../shared/ProfileFIeld';

import styles from './Profile.module.css';

function Profile() {

    const [user] = useContext(UserContext);
    const [dataUser, setUserData] = useState(null);

    useEffect(() => {
        userServices.getProfile(user.userId)
            .then(data => {
                setUserData(data)
                console.log(dataUser)
            })
            .catch(err => console.log(err))
    }, []);


    const onSubmit = () => {

    }

    return (
        dataUser ? <Fragment>

            <h1 classname={styles.heading}>User Details</h1>
            <Form
                onSubmit={onSubmit}
                initialValues={dataUser}
                render={({ handleSubmit, pristine, form, submitting, values }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <ProfileField name={"username"} component={"input"} placeholder={'Username'} />
                            <ProfileField name={"firstName"} component={"input"} placeholder={'First Name'} />
                            <ProfileField name={"lastName"} component={"input"} placeholder={'Last Name'} />
                            <ProfileField name={"email"} component={"input"} placeholder={'Email'} />

                            <div className="buttons">
                                <button type="submit" disabled={submitting || pristine}>
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                >
                                    Reset
                            </button>
                            </div>  
                        </form>
                    )
                }}
            />
        </Fragment>
            :
            <div>loading</div>


    )
}

export default Profile;