const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 3500
server.listen(port, ()=>{
    console.log(`app listen to the port:${port}`)
});
let todos = [
    {id: 1, task: "Take out trash", completed: false},
    {id: 2, task: "Do laundry", completed: true}
];

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.get('/todos', (req , res) => {
    res.send(todos);
});


