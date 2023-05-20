const express = require("express");
const http = require("http");
var cors = require("cors"); //import items from routes folder

const itemsRouter = require("./routes/itemsRouter");

const app = express();

app.use(express.json());

app.use(cors({origin:"http://localhost:8100"}));

app.use("/items",itemsRouter);

//default URL to API
app.use("/",(req,res) => {
    res.send("node-ex-api works");
});

const server = http.createServer(app);
const port = 3000;

server.listen(port);

console.log("Server listening on port" + port);