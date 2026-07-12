import express from "express";
import { nanoid } from "nanoid";
import { client } from "./mongodb.js";
import { ObjectId } from "mongodb";

const userRouter = express.Router();
const myDB = client.db("userDatabase");
const myColl = myDB.collection("users");

// create user
const userList = [];
userRouter.post("/", async (req, res) => {
  const { name, email, phone } = req.body;
  const NewUser = {
    id: nanoid(),
    name,
    email,
    phone,
  };

  const result = await myColl.insertOne(NewUser);
  console.log(result);

  res.send({
    message: "user created successfully",
    data: result,
  });
});

// get all users
userRouter.get("/", async (req, res) => {
  try {
    const result = myColl.find({});
    const userList = await result.toArray();

    res.status(200).send({
      success: "user list successfully fetch",
      data: userList,
    });
  } catch (error) {
    console.log("server not reachable", error);
    res.status(500).send({
      error: "server not reachable",
    });
  }
});

// get single user
userRouter.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    console.log("Searching for user ID: ", userId);

    const user = await myColl.find({ _id: new ObjectId(userId) }).toArray();

    res.status(200).send({
      success: "user found successfully",
      data: user,
    });
  } catch (error) {
    console.log("Error occurred:", error);
    res.status(500).send({ success: false, message: "Server error" });
  }
});

// update user details
userRouter.put("/:id", (req, res) => {
  res.send({
    message: "user updated successfully",
  });
});

// delete user
userRouter.delete("/:id", (req, res) => {
  res.send({
    message: "user deleted successfully",
  });
});

export default userRouter;
