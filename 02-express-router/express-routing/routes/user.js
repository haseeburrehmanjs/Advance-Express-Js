import express from "express";
import { nanoid } from "nanoid";

const userRouter = express.Router();

// create user
const userList = [];
userRouter.post("/", (req, res) => {
  const { name, email, phone } = req.body;
  const NewUser = {
    id: nanoid(),
    name,
    email,
    phone,
  };

  userList.push(NewUser);

  res.send({
    message: "user created successfully",
    data: NewUser,
  });
});

// get all users
userRouter.get("/", (req, res) => {
  res.send({
    message: "user list successfully fetch",
    data: userList,
  });
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
