//pedido 

import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente", required: true },
    automovel: { type: mongoose.Schema.Types.ObjectId, ref: "Automovel", required: true },
    dataInicio: { type: Date, required: true },
    dataFim: { type: Date, required: true },

    status: {
      type: String,
      enum: ["Em análise", "Aprovado", "Reprovado", "Cancelado", "Contrato em execução"],
      default: "Em análise",
    },

    // resultado da avaliacao financeira
    avaliacao: {
      agente: { type: mongoose.Schema.Types.ObjectId, ref: "Agente" },
      data: { type: Date },
      parecer: { type: String, enum: ["aprovado", "reprovado"] },
      observacao: { type: String, trim: true },
    },
  },
  { timestamps: true } 
);

// Regras: a data final tem que ser depois da inicial

schema.pre("validate", function () {
  if (this.dataFim <= this.dataInicio) {
    throw new Error("A data final precisa ser depois da data inicial");
  }
});

export default mongoose.model("Pedido", schema);