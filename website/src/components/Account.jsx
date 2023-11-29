import React from "react";

const Account = ({ title, accountAmount, balance }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3>{title}</h3>
        <p className="account-amount">{accountAmount}</p>
        <p className="account-amount-description">{balance}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transaction</button>
      </div>
    </section>
  );
};

export default Account;
