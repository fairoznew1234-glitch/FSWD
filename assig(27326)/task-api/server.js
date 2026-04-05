const express = require('express');
const app = express();

app.use(express.json());

// In-memory data (no database)
let tasks = [
{ id: 1, title: "Learn Node.js", completed: false },
{ id: 2, title: "Build API", completed: false }
];

// 👉 CREATE Task (POST)
app.post('/tasks', (req, res) => {
const newTask = {
id: tasks.length + 1,
title: req.body.title,
completed: false
};

tasks.push(newTask);
res.status(201).json(newTask);
});

// 👉 READ All Tasks (GET)
app.get('/tasks', (req, res) => {
res.json(tasks);
});

// 👉 READ Single Task (GET by ID)
app.get('/tasks/:id', (req, res) => {
const task = tasks.find(t => t.id == req.params.id);

if (!task) {
return res.status(404).json({ message: "Task not found" });
}

res.json(task);
});

// 👉 UPDATE Task (PUT)
app.put('/tasks/:id', (req, res) => {
const task = tasks.find(t => t.id == req.params.id);

if (!task) {
return res.status(404).json({ message: "Task not found" });
}

task.title = req.body.title || task.title;
task.completed = req.body.completed ?? task.completed;

res.json(task);
});

// 👉 DELETE Task (DELETE)
app.delete('/tasks/:id', (req, res) => {
const index = tasks.findIndex(t => t.id == req.params.id);

if (index === -1) {
return res.status(404).json({ message: "Task not found" });
}

const deletedTask = tasks.splice(index, 1);
res.json(deletedTask);
});

// Server
app.listen(3000, () => {
console.log("Server running on port 3000");
});
f