import React, { useEffect } from "react";
import { useState } from "react";
import Message from "./Message";
import FlipMove from "react-flip-move";
import "./Chat.css";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import { useSelector } from "react-redux";
import { selectChatName, selectChatId } from "../features/chatSlice";
import { db } from "../firebase";
import firebase from "firebase";
import { selectUser } from "../features/userrSlice";
function Chat() {
  const user = useSelector(selectUser);
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      displayName: user.displayName,
      email: user.email,
    });

    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">{chatName}</span>
        </h4>
        <h5>Details</h5>
      </div>
      <div className="chat__messages">
        <FlipMove>
          {messages.map(({ id, data }) => (
            <Message key={id} contents={data} />
          ))}
        </FlipMove>
      </div>
      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="iMessage"
            type="text"
          />
          <button onClick={sendMessage}>send message</button>
        </form>
        <MicNoneOutlinedIcon className="chat__mic" />
      </div>
    </div>
  );
}

export default Chat;
