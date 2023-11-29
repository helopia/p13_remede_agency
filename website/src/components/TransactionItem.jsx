import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const TransactionItem = ({ transaction }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="transaction-item">
      <div className="transaction-content" onClick={toggleExpansion}>
        <div className="transaction-date">
          <span>{expanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
          {transaction.date}
        </div>
        <div>{transaction.description}</div>
        <div>{transaction.amount}</div>
        <div>{transaction.balance}</div>
      </div>
      {expanded && (
        <div className="transaction-details">
          <p>Transaction Type: Electronic</p>
          <p>
            Category: {transaction.category}
            <button>
              <FontAwesomeIcon icon={faPen} />
            </button>
          </p>
          <p>
            notes: {transaction.notes}
            <button>
              <FontAwesomeIcon icon={faPen} />
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default TransactionItem;
