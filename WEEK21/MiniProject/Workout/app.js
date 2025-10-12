const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Import routes
const exercisesRoutes = require("./routes/exercisesRoutes");
const workoutsRoutes = require("./routes/workoutsRoutes");
const usersRoutes = require("./routes/usersRoutes");
const userWorkoutsRoutes = require("./routes/userWorkoutsRoutes");

// Mount routes
app.use("/api/exercises", exercisesRoutes);
app.use("/api/workouts", workoutsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/user-workouts", userWorkoutsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Import routes
const exercisesRoutes = require("./routes/exercisesRoutes");

// Mount routes
app.use("/api/exercises", exercisesRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
