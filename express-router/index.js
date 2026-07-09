import express from "express";
import commentRouter from "./routes/users.js";
import supplierRouter from "./routes/supplier.js";
import apiRouter from "./routes/index.js";
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors())
const port = 3001;

app.use("/api/v1", apiRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
