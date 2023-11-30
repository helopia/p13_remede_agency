import React from "react";
import {Link} from "react-router-dom";

const Account = ({ title, accountAmount, balance }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3>{title}</h3>
        <p className="account-amount">{accountAmount}</p>
        <p className="account-amount-description">{balance}</p>
      </div>
      <div className="account-content-wrapper cta">
          <Link to='/transactions'>
        <button className="transaction-button">View transaction</button></Link>
      </div>
    </section>
  );
};

export default Account;
