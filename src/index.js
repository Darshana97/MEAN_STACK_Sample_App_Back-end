import express from "express";
import cors from 'cors'



const app = express();

const PORT = process.env.PORT | 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});
