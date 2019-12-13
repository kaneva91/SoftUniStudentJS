import React, { Fragment } from 'react';
import styles from './Terms.module.css';

function Terms() {
    return (<Fragment>

        <article className={styles.content}>
            <div>
                <h1>Terms and Conditions</h1>
                <p>
                    These Terms of Service govern the relationship between Online Jewerly Shop as a seller on the one hand, and users of the website and services located in the localhost: 300 domain as a buyer on the other. These Terms bind all users who, by clicking on any site, link or button located on the Online Jewerly Shop pages (except for the link to these Terms and Conditions), agree, fully accept and undertake to comply with these "General" terms. "
                </p>
            </div>
            <div>
                <h4>Order:</h4>
                <p>
                    You can order from the Online Jewerly Shop 24 hours a day, including weekends and public holidays. When finalizing your order, you have the opportunity to view the products you have selected as well as the shipping and contact information for you.
                </p>
                <p>
                    A properly completed and sent by phone call is a binding offer for the conclusion of a distance sales contract with the selling party.
                            The sale contract itself is drawn up by the selling party and is considered to be valid after the selling party has sent the goods to the consign
                </p>
                <p>
                    In view of the fact that the contract of sale concluded between the online store and the users of the site is concluded on the basis of a proposal from the supplier to the consumer as part of a system of sale of goods under which from the moment of making the offer until the conclusion of the contract , as well as at the time of the conclusion of the contract, the parties are not in physical contact with each other, the contract is a distance sale contract.
                 </p>
            </div>
            <div>
                <h4>Order Price:</h4>
                <p>
                    The final amount due is the sum of all the individual products that the customer has stated plus the shipping cost. All prices are pre-charged VAT and are not subject to change from the time of ordering until the time of payment. Prices are in BGN.
                </p>
            </div>
            <div>
                <h4>Delivery</h4>
                <p>
                    When ordering from the Online Jewerly Shop website, the delivery is made only in Bulgaria. The preparation of the products and their shipment are done within 2 working days.
                </p>
            </div>
        </article>
    </Fragment>)


}

export default Terms;