import React from "react";
import "./Imessage.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function imessage() {
  return (
    <div className="imessage">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default imessage;
