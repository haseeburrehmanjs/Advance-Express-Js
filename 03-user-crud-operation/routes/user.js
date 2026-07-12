import express from "express";
import { client } from "./mongodb.js";
import { nanoid } from "nanoid";

export const userRouter = express.Router();

const myDb = client.db("userDatabase");
const myColl = myDb.collection("users");

// create user api
userRouter.post("/", async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const response = await myColl.insertOne({
      id: nanoid(),
      name,
      email,
      phone,
    });

    res.status(200).send({
      success: "User Created Successfully",
      data: response,
    });
  } catch (error) {
    console.log("server not reachable", error);
  }
});

// get users api
userRouter.get("/", async (req, res) => {
  try {
    const userList = await myColl.find({}).toArray();
    res.status(200).send({
      message: "users fetch successfully",
      data: userList,
    });
  } catch (error) {
    console.log("server not reachable", error);
  }
});
