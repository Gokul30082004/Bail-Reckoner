import React from 'react';
// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcApplePay, faGooglePay } from '@fortawesome/free-brands-svg-icons';
import "./style.css";
export const Payment = () => {
  return (
    <div className="payment-icons">
      <h3>Supported Payment Methods</h3>
      <div className="icons-container">
        <div className="icon">
          <FontAwesomeIcon icon={faCcVisa} size="3x" />
          <p>Visa</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faCcMastercard} size="3x" />
          <p>Mastercard</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faCcApplePay} size="3x" />
          <p>Apple Pay</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faGooglePay} size="3x" />
          <p>Google Pay</p>
        </div>
      </div>
    </div>
  );
};