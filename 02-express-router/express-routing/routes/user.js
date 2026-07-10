import express from "express";

const userRouter = express.Router();

// create user
const userList = [];

userRouter.post("/", (req, res) => {
  userList.push(req.body);

  res.send({
    message: "user created successfully",
    data: req.body,
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
