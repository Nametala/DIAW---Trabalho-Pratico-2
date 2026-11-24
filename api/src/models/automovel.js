//automovel 
import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    marca: { type: String, required: true, trim: true },
    modelo: { type: String, required: true, trim: true },
    ano: { type: Number, required: true },
    placa: { type: String, required: true, unique: true, trim: true, uppercase: true },
    matricula: { type: String, required: true, unique: true, trim: true },

    donoCliente: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente" },
    donoAgente: { type: mongoose.Schema.Types.ObjectId, ref: "Agente" },
  },
  { timestamps: true }
);

// regras: carro so pode ter um dono
// pre -> so deixa salvar se passar nos criterios
schema.pre("validate", function () {
  const quantosDonos = [this.donoCliente, this.donoAgente].filter(Boolean).length;
  if (quantosDonos !== 1) {
    throw new Error("O automóvel precisa ter um dono: cliente OU agente");
  }
});

export default mongoose.model("Automovel", schema);