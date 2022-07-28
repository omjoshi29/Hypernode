const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");

const app = express();
let httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});
let msgarr = [];
io.on("connection", (ws) => {
  ws.emit("history", msgarr);
  ws.on("message", (msg) => {
    console.log("client", msg);
    msgarr.push(msg);
    if(!msg){
        ws.emit("message","please enter valid input")
    }else{
        io.emit("message", msg);
    }
});
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
  res.send("hello");
});

httpServer.listen(8080, () => {
  console.log("connected");
});
