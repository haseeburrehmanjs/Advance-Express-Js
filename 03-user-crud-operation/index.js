import express from "express";
import cors from "cors";
import apiRouter from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.use("/api/v1", apiRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
