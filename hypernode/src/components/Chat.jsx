import React, { useState } from "react";
import { useEffect } from "react";
import { io } from "socket.io-client";
import "./chat.css"

export const Chat = () => {
  let [message, setmessage] = useState([]);
  let [send, setSend] = useState("");
  let [show,setshow] = useState(true)
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

  return <>
  <div> <button>show</button>
  <button>hide</button></div>
    <div className="chatbox">
      <div className="chatwindow">
      {message.map((el, index) => {
        return (
          <div>
            {el.client && <p className="user"> {el.client} : user</p>}
            <div  className="bot">
            <p className="ser">bot : {el.server}</p>
            {el.choice &&
              el.choice.map((el) => {
                return (
                  <div>
                    {" "}
                     <p>{el.name}</p>
                    {el.subcats &&
                      el.subcats.map((el) => {
                        return <p>{el.name}</p>;
                      })}
                  </div>
                );
              })}</div>
          </div>
        );
      })}</div>
      <div className="chatip">
      <input
        type={"text"}
        placeholder="enter your msg"
        onChange={(e) => setSend(e.target.value)}
      />
      <button onClick={handleclick}>send</button>
    </div></div>
  </>
};
