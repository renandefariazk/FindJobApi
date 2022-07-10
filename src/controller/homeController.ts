import {Request, Response} from "express";
import { Users } from "../model/user";


export const index = (req: Request, res: Response) => {
  console.log("Server Funcionando");
  // const novoUsuario = await Users.create({name:"Renan", telefone:123456, cpf: 1234});
  // const test = await Users.find({cpf: 123});
  // res.status(200).send(test);
  // res.status(200).send(novoUsuario);
  res.status(200).send("Route Funcionando");
};
