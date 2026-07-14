import express from "express";
import cors from "cors";
import { apiRouter } from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.use("/api/v1", apiRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
