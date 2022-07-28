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
        return (
          <div>
            {el.client && <p> {el.client} : user</p>}
            <p>bot : {el.server}</p>
            {el.choice &&
              el.choice.map((el) => {
                return (
                  <div>
                    {" "}
                    {!el.subcats && <p>{el.name}</p>}
                    {el.subcats &&
                      el.subcats.map((el) => {
                        return <p>{el.name}</p>;
                      })}
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};
