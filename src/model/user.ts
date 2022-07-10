import mongoose from 'mongoose';
const { Schema } = mongoose;

const usersSchema = new Schema({
  name: String,
  telefone: Number,
  cpf: Number
}, {versionKey: false});

const Users = mongoose.model("users", usersSchema);

export { Users };