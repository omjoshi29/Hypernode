import React, { useState } from "react";
import { useEffect } from "react";
import { io } from "socket.io-client";

export const Chat = () => {
  let [message, setmessage] = useState([]);
  let [send, setSend] = useState("");
  let socket = io("http://localhost:8080");
  socket.on("message", (msg) => {
    setmessage([...message, msg]);
  });
  useEffect(() => {
    socket.on("history", (msgarr) => {
      setmessage(msgarr);
    });
  }, []);

  let handleclick = () => {
    socket.emit("message", send);
  };

  return (
    <div>
      <input
        type={"text"}
        placeholder="enter your msg"
        onChange={(e) => setSend(e.target.value)}
      />
      <button onClick={handleclick}>send</button>
      {message.map((el, index) => {
        return <h3 key={index}>{el}</h3>;
      })}
    </div>
  );
};
