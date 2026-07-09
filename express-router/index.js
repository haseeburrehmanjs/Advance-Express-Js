import express from "express";
import commentRouter from "./routes/users.js";
import supplierRouter from "./routes/supplier.js";
import apiRouter from "./routes/index.js";
const app = express();
const port = 3000;

app.use("/api/v1", apiRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
