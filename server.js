const express = require("express");

const users = require('./db.json')

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/users', (req,res) => {
    res.json(users);
});




app.get("/nas", (req, res) => { res.send("Hello! My name is Tatsanai"+"652021051"); });
app.listen(port, () => {
    console.log("Starting node.js at http://127.0.0.1:" + port);
    console.log("Starting node.js at http://127.0.0.1:" + port +"/api/users");
});