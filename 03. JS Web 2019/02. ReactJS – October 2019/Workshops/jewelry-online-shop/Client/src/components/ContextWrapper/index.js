import React, {useState} from 'react';

export const UserContext = React.createContext();

export const UserProvider = props => {
    const [user, setUserStatus] = useState( {loggedIn: false, userId: '', name : ''} );
   
    return(
      <UserContext.Provider value={[user, setUserStatus]}>
        {props.children}
      </UserContext.Provider>  
    )
  }
export const UserConsumer = UserContext.Consumer;
export default UserContext;