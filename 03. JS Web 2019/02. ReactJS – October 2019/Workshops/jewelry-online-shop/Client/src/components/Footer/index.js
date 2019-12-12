import React from 'react';
import styles from './Footer.module.css';


function Footer (){
    return(
        <footer>
            <div className = {styles.contacts}>
                <h4>Contacts:</h4>
                <p>Tel: +359 878 123 123</p>
                <p className={styles.email}>Email: jewerlyonline@example.com</p>
            </div>
            <div>

            </div>
        </footer>
    )
}

export default Footer;