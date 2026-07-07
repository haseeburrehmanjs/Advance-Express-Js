console.log("this is express server hello world");

// what is rest api
// rest api is input and output is json

import express from "express";
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/profile", (req, res) => {
  res.send("Hello Profile!" + " " + new Date());
});

// learn params in server api url
app.get("/student/:name/:age", (req, res) => {
  console.log("req.params.name", req.params.name);
  console.log("req.params.age", req.params.age);
});

// learn query parameter in server api url
app.get("/student", (req, res) => {
  console.log("req.query.name", req.query.name);
  console.log("req.query.age", req.query.age);
  console.log(req.body);

  const students = [
    {
      name: "Haseeb Ur Rehman",
      age: 19,
      designation: "Frontend Developer",
    },
    {
      name: "Muhammad Asharib",
      age: 19,
      designation: "Graphic Designer",
    },
  ];
  const filterStudent = students.filter((item) =>
    item.name.toLowerCase().includes(req?.query.name.toLowerCase()),
  );

  res.send(filterStudent);
});


// create employee add and get request in express js 
const employeeList = [];
app.post("/employee", (req, res) => {
  employeeList.push(req.body);

  res.send({
    message: "employee added successfully",
  });
});

app.get("/employees", (req, res) => {
  res.send(employeeList);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
