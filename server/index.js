const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
})
app.get("/hello", (req, res) => {
  res.send("<h1>Hello Route</h1>");
})
app.get("/sample", (req, res) => {
  res.send("<h1>Sample Route</h1>");
})
app.get("/hero", (req, res) => {
  res.send("<h1>Hero Route</h1>");
})
app.get("/hfp", (req, res) => {
  res.send("<h1>Health First Priority Route</h1>");
})
app.get("/get-data", (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        name: "Pranav",
        age: 22
      },
      {
        id: 2,
        name: "Pranav",
        age: 22
      },
      {
        id: 2,
        name: "Pranav",
        age: 22
      },
      {
        id: 2,
        name: "Pranav",
        age: 22
      },
      {
        id: 2,
        name: "Pranav",
        age: 22
      },
      {
        id: 2,
        name: "Pranav",
        age: 22
      },
      {
        id: 2,
        name: "Pranav",
        age: 22
      },
    ]
  });
})

//PRanav POkale
// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
// mongoose.connect('mongodb://localhost:27017/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen(3000, () => console.log('Server running on port 3000'));

// SAMPLE ROUTE CHECK ON UBUNTU
