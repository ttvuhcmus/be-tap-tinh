import React from "react";
import "../styles/Notification.css";

export default function Notification(props) {
  return (
    <div className="notification">
      <span>Thong bao: </span>
      <span>{props.notification}</span>
    </div>
  );
}
