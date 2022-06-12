import express from "express";
import * as home from "../controller/homeController";

const Route = express.Router();

Route.get("/", home.index);

export default Route;