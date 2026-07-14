import express from "express";
import { client } from "./mongodb.js";

const myDb = client.db("userDatabase");
const myCol = myDb.collection("users");

export const userRouter = express.Router();

// create user
userRouter.post("/", async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const response = await myCol.insertOne({
      name,
      email,
      phone,
    });
    res.status(200).send({
      message: "user created successfully",
      data: response,
    });
  } catch (error) {
    console.log("server error", error);
    res.status(500).send({
      message: `server not reachable, ${error}`,
    });
  }
});

// get all users
userRouter.get("/", async (req, res) => {
  try {
    const userList = await myCol.find({}).toArray();
    res.send({
      message: "get all user successfully",
      data: userList,
    });
  } catch (error) {
    console.log("server error", error);
    res.status(500).send({
      message: `server not reachable, ${error}`,
    });
  }
});
