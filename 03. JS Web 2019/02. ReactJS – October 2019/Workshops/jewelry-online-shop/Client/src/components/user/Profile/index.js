import React, { Fragment, useContext, useState, useEffect } from 'react';
import { UserContext } from '../../ContextWrapper';
import userServices from '../../../services/user-services';
import { Form } from "react-final-form";
import ProfileField from '../../shared/ProfileFIeld';
import { useHistory } from 'react-router-dom';

import styles from './Profile.module.css';


function Profile() {

    const history = useHistory();

    const [user, setUserStatus] = useContext(UserContext);
    const [dataUser, setUserData] = useState(null);

    useEffect(() => {
        userServices.getProfile(user.userId)
            .then(data =>
                setUserData(data))
            .catch(err => console.log(err))
    }, []);


    const updateProfile = values => {
        userServices.updateUser(user.userId, values)
            .then(() => history.push('/profile')) //dfgf
            .catch(err => console.log(err))
    }

    const deleteUserProfile = () => {
        userServices.deleteUser(user.userId)
            .then(() => {
                setUserStatus({ loggedIn: false, userId: '', name: 'Welcome, Guest!' })
                history.push("/")
            })
            .catch(err => console.log(err))
    }

    return (
        dataUser ? <Fragment>
            <h1 className={styles.heading}>User Details</h1>
            <Form
                onSubmit={updateProfile}
                initialValues={dataUser}
                render={({ handleSubmit, pristine, form, submitting }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <ProfileField name={"firstName"} component={"input"} placeholder={'First Name'} />
                            <ProfileField name={"lastName"} component={"input"} placeholder={'Last Name'} />
                            <ProfileField name={"email"} component={"input"} placeholder={'Email'} />

                            <div className={styles.buttons}>
                                <button onClick={(ev) => { ev.preventDefault(); handleSubmit(); }} type="submit" disabled={submitting || pristine} >
                                    Update Profile
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
            <div>
                <button onClick={deleteUserProfile}> Delete Frofile</button>
            </div>
        </Fragment>
            :
            <div>loading</div>
    )
}

export default Profile;