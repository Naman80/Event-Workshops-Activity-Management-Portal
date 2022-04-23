const express = require("express");
const app = express();
const server = require("http").Server(app);
const event = require("./routes/Event");
const database = require("./Routes/Database");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello");
})

app.use("/api/event", event);
app.use("/api/database", database);

server.listen(process.env.PORT || 5001, () => console.log(`Server has started.`));