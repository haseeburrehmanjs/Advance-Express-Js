import express from "express";

const supplierRouter = express.Router();

// supplier created api
const SupplierList = [];
supplierRouter.post("/", (req, res) => {
  SupplierList.push(req.body);
  console.log(req.body);
  

  res.send({
    message: "supplier created successfully",
    data: req.body,
  });
});

// supplier all api
supplierRouter.get("/", (req, res) => {
  res.send(SupplierList);
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
