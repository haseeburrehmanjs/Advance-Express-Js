// console.log("this is express server hello world");

// // what is rest api
// // rest api is input and output is json

// import express from "express";
// const app = express();
// app.use(express.json());
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/profile", (req, res) => {
//   res.send("Hello Profile!" + " " + new Date());
// });

// // learn params in server api url
// app.get("/student/:name/:age", (req, res) => {
//   console.log("req.params.name", req.params.name);
//   console.log("req.params.age", req.params.age);
// });

// // learn query parameter in server api url
// app.get("/student", (req, res) => {
//   console.log("req.query.name", req.query.name);
//   console.log("req.query.age", req.query.age);
//   console.log(req.body);

//   const students = [
//     {
//       name: "Haseeb Ur Rehman",
//       age: 19,
//       designation: "Frontend Developer",
//     },
//     {
//       name: "Muhammad Asharib",
//       age: 19,
//       designation: "Graphic Designer",
//     },
//   ];
// const filterStudent = students.filter((item) =>
//   item.name.toLowerCase().includes(req?.query.name.toLowerCase()),
// );

//   res.send(filterStudent);
// });

// // create employee add and get request in express js
// const employeeList = [];
// app.post("/employee", (req, res) => {
//   employeeList.push(req.body);

//   res.send({
//     message: "employee added successfully",
//   });
// });

// app.get("/employees", (req, res) => {
//   res.send(employeeList);
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// import express from "express";
// const app = express();
// app.use(express.json());
// const port = 3000;

// // create add student api
// const studentList = [];

// app.post("/student", (req, res) => {
//   studentList.push(req.body);

//   res.status(200).send({
//     message: "student added successfully",
//   });
// });

// // get all students api using local variable and find student using query
// app.get("/students", (req, res) => {
//   const name = req?.query.name;

//   const filterStudent = studentList.filter((item) =>
//     item.name.toLowerCase().includes(req?.query.name.toLowerCase()),
//   );

//   res.status(200).send(filterStudent);
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// import express from "express";
// const app = express();
// app.use(express.json());
// // app.use(express.static("public"));
// const port = 3000;

// const employeeList = [];
// app.post("/employee", (req, res) => {
//   employeeList.push(req.body);

//   res.send({
//     message: "employee added successfully",
//   });
// });

// app.get("/employees", (req, res) => {
//   res.send(employeeList);
// });

// app.post("/weather", (req, res) => {
//   console.log(req.body);

//   res.send({
//     message: "weather is normal",
//     temp: 32,
//     high: 60,
//     low: 50,
//   });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// import express from "express";
// const app = express();
// app.use(express.json());
// const port = 3000;

// app.post("/supplier", (req, res) => {
//   console.log(req.body);

//   res.send({
//     message: "Supplier created successfully",
//     data: {
//       name: req.body.name,
//       age: req.body.age,
//       email: req.body.email,
//     },
//   });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// import express from "express";
// const app = express();
// app.use(express.json()); // body parser
// const port = 3000;

// app.post("/api/v1/supplier", (req, res) => {
//   console.log(req.body);

//   res.send({
//     message: "supplier created successfully",
//     data: {
//       name: req.body?.name,
//       age: req.body?.age,
//       email: req.body?.email,
//       phone: req.body?.phone,
//     },
//   });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

import express from "express";
const app = express();
app.use(express.json()); // body parser
const port = 3000;

// create supplier api

const supplierList = [];
app.post("/api/v1/supplier", (req, res) => {
  supplierList.push(req.body);

  res.send({
    message: "supplier created successfully",
    data: {
      name: req.body?.name,
      email: req.body?.email,
      age: req.body?.age,
      phone: req.body?.phone,
    },
  });
});

app.get("/api/v1/suppliers", (req, res) => {
  res.send(supplierList);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
