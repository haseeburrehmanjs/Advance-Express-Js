import express from "express";

const userRouter = express.Router();

// user created api
userRouter.post("/", (req, res) => {
  res.send({
    message: "user created successfully",
  });
});

// get all user api
userRouter.get("/", (req, res) => {
  res.send({
    message: "hy i am all user list",
  });
});

// update user
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
