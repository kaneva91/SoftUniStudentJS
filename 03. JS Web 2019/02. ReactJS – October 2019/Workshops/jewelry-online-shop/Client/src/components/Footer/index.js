import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Footer.module.css';
import Contacts from '../shared/Contacts'


function Footer (){
    return(
        <footer>
            <div>
                <Contacts/>
            </div>
            <div className = {styles.products}>
                <Link to="/"> <h4>Product Categories:</h4></Link>
                <Link to="/bracelets"> <p>Bracelets</p></Link>
                <Link to="/earings"> <p>Earings</p></Link>
                <Link to="/keychains"> <p>Keychains</p></Link>
            </div>
            <div className={styles.about}>
            <Link to="/about"> <h4>About</h4></Link>
            <Link to="/terms"> <h4>Terms and Conditions</h4></Link>
            </div>
            <div className={styles.rights}>
                <p>
                    Online Jewerly Shop &copy;
                </p>
                <p>All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;