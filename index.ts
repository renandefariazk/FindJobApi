import express from "express";

const app = express();

const port = process.env.PORT || 8000;

// app.use(app.json());

app.listen(port, () =>{
  console.log("Serve Port", port);
});