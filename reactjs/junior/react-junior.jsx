import React from "react";

const Notification = ({ message, type }) => {
  if (!message) {
    return null;
  }

  let className = 'alert alert-info';
  if (type === 'success') {
    className = 'alert alert-success';
  } else if (type === 'caution') {
    className = 'alert alert-warning';
  } else if (type === 'error') {
    className = 'alert alert-danger';
  }

  return (
    <div id="app">
      <div className={className}>
        {message}
      </div>
    </div>
  );
};

export default Notification;