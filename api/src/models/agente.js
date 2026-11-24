//agente

import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    nome: { type: String, required: true, trim: true },
    cnpj: { type: String, required: true, unique: true, trim: true },
    endereco: { type: String, required: true, trim: true },
    tipo: { type: String, enum: ["empresa", "banco"], required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Agente", schema);