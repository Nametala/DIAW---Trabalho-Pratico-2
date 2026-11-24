import mongoose from "mongoose";

export async function conectar() {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Conectou o mongo')
}