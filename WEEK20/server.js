const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 3000;
const usersFile = path.join(__dirname, "users.json");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Helper to read users
function readUsers() {
  try {
    const data = fs.readFileSync(usersFile, "utf8");
    return JSON.parse(data || "[]");
  } catch (err) {
    console.error("Error reading users:", err);
    return [];
  }
}

// Helper to write users
function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

// ✅ POST /register
app.post("/register", async (req, res) => {
  const { name, lastname, email, username, password } = req.body;

  if (!name || !lastname || !email || !username || !password) {
    return res.status(400).send("Please fill all fields.");
  }

  let users = readUsers();
  const userExists = users.find(u => u.username === username || u.email === email);

  if (userExists) {
    return res.send("error1: Username or Email already exists!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name,
    lastname,
    email,
    username,
    password: hashedPassword,
  };

  users.push(newUser);
  writeUsers(users);

  res.send("register: User registered successfully!");
});

// ✅ POST /login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const users = readUsers();
  const user = users.find(u => u.username === username);

  if (!user) {
    return res.send("error2: User not registered!");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.send("error2: Incorrect username or password!");
  }

  res.send(`login: Welcome back, ${user.name}!`);
});

// ✅ GET /users
app.get("/users", (req, res) => {
  const users = readUsers();
  res.json(users);
});

// ✅ GET /users/:id
app.get("/users/:id", (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

// ✅ PUT /users/:id
app.put("/users/:id", (req, res) => {
  const { name, lastname, email } = req.body;
  let users = readUsers();
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

  if (userIndex === -1) return res.status(404).json({ error: "User not found" });

  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    lastname: lastname || users[userIndex].lastname,
    email: email || users[userIndex].email,
  };

  writeUsers(users);
  res.json(users[userIndex]);
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Something went wrong" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
