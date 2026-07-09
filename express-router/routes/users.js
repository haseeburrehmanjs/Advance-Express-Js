import express from "express";

const userRouter = express.Router();

// user created api
userRouter.post("/", (req, res) => {
  res.send("user create successfully");
});

// user all api
userRouter.get("/", (req, res) => {
  res.send("here is all users list");
});

// user updated api
userRouter.put("/:id", (req, res) => {
  res.send("user updated successfully");
});

// user deleted api
userRouter.delete("/:id", (req, res) => {
  res.send("user deleted successfully");
});

export default userRouter;
