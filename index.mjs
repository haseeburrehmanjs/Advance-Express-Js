console.log("this is express server hello world");

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/profile", (req, res) => {
  res.send("Hello Profile!" + " " + new Date());
});

// learn params in server api urk
app.get("/student/:name/:age", (req, res) => {
  console.log("req.params.name", req.params.name);
  console.log("req.params.age", req.params.age);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
