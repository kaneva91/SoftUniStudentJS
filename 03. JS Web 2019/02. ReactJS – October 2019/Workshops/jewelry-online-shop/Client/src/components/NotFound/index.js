import React  from 'react';
import{useHistory} from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
    const history = useHistory();
    return (
        <div className={styles['not-found-wrapper']}>
            <p className={styles['four-o-four']}>404</p>
            <p className={styles['not-found-message']}>Something went wrong...</p>
            <div className={styles['button-wrapper']}>
                <button className={styles['back-btn']}onClick={()=> {history.push('/')}}>Back to Home</button>
            </div>
        </div>
    )
}

export default NotFound;