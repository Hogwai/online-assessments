import React from "react";

const Notification = ({type, message, children}) => {
  type = {
    success: "success",
    message: "info",
    caution: "warning",
    error: "danger"
  }[type] || "info";
  return (
    <div className={`alert alert-${type}`}>
      <p>{message}</p>
      {children}
    </div>
  );
};

export default Notification;