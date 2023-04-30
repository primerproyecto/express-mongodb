const express = require("express");

require("dotenv").config();

const mongoose = require("mongoose");

const userRoutes = require("./routes/user");

const app = express();

const PORT = process.env.PORT || 3000;

//MIDDLEWARE
app.use(express.json());
app.use("/api", userRoutes);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my api");
});

//mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("estamos conectados a la base de datos"))
  .catch((error) => console.error(error));

app.listen(PORT, () => console.log("server listening on port", PORT));
