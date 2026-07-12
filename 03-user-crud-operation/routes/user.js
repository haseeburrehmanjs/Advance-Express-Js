import express from "express";
import { client } from "./mongodb.js";
import { nanoid } from "nanoid";
import { ObjectId } from "mongodb";

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
      created_on: new Date(),
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
    const userList = await myColl
      .find({})
      .sort({ _id: -1 })
      .limit(100)
      .toArray();
    res.status(200).send({
      message: "users fetch successfully",
      data: userList,
    });
  } catch (error) {
    console.log("server not reachable", error);
  }
});

// delete user
userRouter.delete("/:id", async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(500).send({
      message: "Invalid user id",
    });
    return;
  }

  try {
    const deleteUser = await myColl.deleteOne({
      _id: new ObjectId(req.params.id),
    });

    res.send({
      message: "user delete successfully",
      data: deleteUser,
    });
  } catch (error) {
    console.log("server not reachable", error);
  }
});
