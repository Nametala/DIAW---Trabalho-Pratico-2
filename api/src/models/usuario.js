// login

import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    senha: { type: String, required: true, select: false }, 
    perfil: { type: String, enum: ["cliente", "agente"], required: true },
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente" }, // se for cliente
    agente: { type: mongoose.Schema.Types.ObjectId, ref: "Agente" },   // se for agente
  },
  { timestamps: true }
);

export default mongoose.model("Usuario", schema);