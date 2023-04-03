import express from "express";
import bodyParser from "body-parser";

// Rest, Middleware, Cookies 

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// ta emot meddelanden med get, post, put, delete.

const todos = [];

app.get("/", (req, res) => {
  console.log("received get request");
  res.send("hello world from express 2");
});

app.post("/todos", (req, res) => {
  const data = req.body;
  todos.push(data);

  console.log("todos", todos);

  res.send(
    "Post data received: " + data.title + " " + data.done + " " + data.id
  );
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    if (id == todo.id) {
      todos[i] = data;
    }
  }

  console.log("todos updated", todos);
  res.send("done");
});

app.listen(PORT, () => {
  console.log("Express server started on port " + PORT);
});
