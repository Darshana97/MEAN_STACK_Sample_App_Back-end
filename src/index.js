import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

app.use("/", router);

const PORT = process.env.PORT | 4000;

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});
