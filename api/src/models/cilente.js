// cliente

import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    nome: { type: String, required: true, trim: true },
    cpf: { type: String, required: true, unique: true, trim: true },
    rg: { type: String, required: true, trim: true },
    profissao: { type: String, required: true, trim: true },

    endereco: {
      rua: { type: String, required: true, trim: true },
      numero: { type: String, required: true, trim: true },
      bairro: { type: String, trim: true },
      cidade: { type: String, required: true, trim: true },
      estado: { type: String, required: true, trim: true },
      cep: { type: String, required: true, trim: true },
    },

    // empregos pra depois conferir na av financeira
    empregos: {
      type: [
        {
          empregador: { type: String, required: true, trim: true },
          rendimento: { type: Number, required: true, min: 0 },
        },
      ],
      validate: {
        validator: (lista) => lista.length <= 3,
        message: "O cliente pode ter no máximo 3 empregos",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Cliente", schema);