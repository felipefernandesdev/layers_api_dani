import express from "express";
import { UserController } from "./controller/user.controller.js";
const app = express();
app.use(express.json());

const userController = new UserController();
app.post("/users", userController.handle); //Aqui chama o Controller

app.listen(3000, () => console.log("API is running on port 3000"));

process.on("uncaughtException", (error, origin)=>{
  console.log("Uncaught Exception: ", error, origin);
})
