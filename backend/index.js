const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");

const connection = require("./db");
const userRouter = require("./routes/user.routes");

const User = require("./models/user");
const category = require("./models/category");
const subcat = require("./models/subcat");
const Bot = require("./models/bot");
const Chatdata = require("./utils/storing");

const app = express();
let httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", async (ws) => {
  let chats = await Bot.find();
  let choice = await category.find();
  let sub = await subcat.find();
  ws.emit("history", chats);
  ws.on("message", async (msg) => {
    if (!msg) {
      ws.emit("message", { server: "give valid input", client: "" });
    } else if (msg.includes("ello")) {
      let data = { client: msg, server: "how are you?" };
      Chatdata(data);
      io.emit("message", data);
    } else if (msg.includes("fine")) {
      let choice = await category.find();
      let data = { client: msg, server: "which field do you want?", choice };
      Chatdata(data);
      io.emit("message", data);
    } else if (msg === "reset") {
      let del = await Bot.deleteMany({ server: { $ne: "Hello user" } });
      let chat = await Bot.find();
      io.emit("history", chat);
    } else if (msg) {
      let flag = false;
      choice.map(async (el) => {
        if (msg === el.name) {
          flag = true;
          let subs = await category.aggregate([
            {
              $lookup: {
                from: "subcats",
                localField: "subcatid",
                foreignField: "_id",
                as: "subcats",
              },
            },
            {
              $project:{
              subcats : 1,
              }
            }
          ]);
          let data = {
            client: msg,
            server: "which course you are interested in ?",
            choice: subs,
          };
          Chatdata(data);
          io.emit("message", data);
        }
      });
      sub.map((el)=>{
        if(el.name==msg){
          flag = true
          let data = {
            client: msg,
            server: "below is the link to the selected courses",
            link: `/${msg}`
          };
          Chatdata(data);
          io.emit("message", data);
        }
        })
      if (flag == false) {
        let data = { client: "", server: "enter valid input" };
        ws.emit("message", data);
      }
    } else {
      let data = { client: "", server: "enter valid input" };
      ws.emit("message", data);
    }
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.send("hello");
});

httpServer.listen(8080, async () => {
  try {
    await connection;
    console.log("connected");
  } catch (error) {
    console.log("failed",error);
  }
});
