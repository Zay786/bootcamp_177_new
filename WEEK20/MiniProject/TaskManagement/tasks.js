const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const filePath = path.join(__dirname, "../tasks.json");

// Helper to read tasks
function readTasks() {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data || "[]");
  } catch (err) {
    console.error("Error reading tasks:", err);
    return [];
  }
}

// Helper to write tasks
function writeTasks(tasks) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
  } catch (err) {
    console.error("Error writing tasks:", err);
    throw err;
  }
}

// ✅ GET all tasks
router.get("/", (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// ✅ GET task by ID
router.get("/:id", (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
});

// ✅ POST create new task
router.post("/", (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const tasks = readTasks();
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    description: description || "",
    completed: false,
  };

  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});

// ✅ PUT update task
router.put("/:id", (req, res) => {
  const { title, description, completed } = req.body;
  const tasks = readTasks();
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  if (!title && !description && completed === undefined) {
    return res.status(400).json({ error: "Provide at least one field to update" });
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title: title !== undefined ? title : tasks[taskIndex].title,
    description: description !== undefined ? description : tasks[taskIndex].description,
    completed: completed !== undefined ? completed : tasks[taskIndex].completed,
  };

  writeTasks(tasks);
  res.json(tasks[taskIndex]);
});

// ✅ DELETE task
router.delete("/:id", (req, res) => {
  const tasks = readTasks();
  const newTasks = tasks.filter(t => t.id !== parseInt(req.params.id));

  if (tasks.length === newTasks.length) {
    return res.status(404).json({ error: "Task not found" });
  }

  writeTasks(newTasks);
  res.json({ message: "Task deleted successfully" });
});

module.exports = router;
