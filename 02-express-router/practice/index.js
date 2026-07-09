import express from "express";
import cors from "cors";
import userRouter from "./routes/user.js";

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.use("/api/v1/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
