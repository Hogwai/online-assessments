import React, { useState } from "react";
import Notification from "./Notification";

const Confirmation = ({ message, type, accept, decline }) => {
  const [dismissed, setDismissed] = useState(false);

  const handleAccept = () => {
    accept();
    setDismissed(true);
  };

  const handleDecline = () => {
    decline();
    setDismissed(true);
  };

  if (dismissed) {
    return null;
  }

  return (
    <Notification type={type} message={message}>
      <button className="btn btn-primary" onClick={handleAccept}>
        Yes
      </button>
      <button className="btn btn-danger" onClick={handleDecline}>
        No
      </button>
    </Notification>
  );
};

export default Confirmation;