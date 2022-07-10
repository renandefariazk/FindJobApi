import express from "express";
import mongoose from "mongoose";
import route from "./src/routes/homeRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const database = process.env.MONGODATABASE;
mongoose.connect(database as string);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error: "));

db.once("open", () => {
  console.log("Connection Successfully");
});

app.use("/", route);

const port = process.env.PORT || 8000;

// app.use(app.json());

app.listen(port, () =>{
  console.log("Serve Port", port);
});