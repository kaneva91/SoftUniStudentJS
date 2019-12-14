import React from 'react';
import styles from '../shared/styles/AboutAndTerms.module.css';

function About(){
    return(
        <article>
              <h1 className={styles.heading}>
            About Us
        </h1>
        <p className={styles.about}>
        By creating the JewerlyOn line Shop brand, we aim to remain the only hobby in a business that can be offered to the emotions of the people around us. We started, driven by the ambition to do something different, qualitative and authoritative. They created inspiration for results and last results that do not follow.
        </p>
        </article>
    )
}

export default About;