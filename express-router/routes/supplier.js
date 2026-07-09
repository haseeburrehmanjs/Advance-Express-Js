import express from "express";

const supplierRouter = express.Router();

// supplier created api
supplierRouter.post("/", (req, res) => {
  res.send("supplier create successfully");
});

// supplier all api
supplierRouter.get("/", (req, res) => {
  res.send("here is all supplier list");
});

// supplier updated api
supplierRouter.put("/:id", (req, res) => {
  res.send("supplier updated successfully");
});

// supplier deleted api
supplierRouter.delete("/:id", (req, res) => {
  res.send("supplier deleted successfully");
});

export default supplierRouter;
