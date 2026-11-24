import express from "express"
import cors from "cors"

const app = express()

app.use(cors()) // libera as portas pra trabalhar back e front
app.use(express.json()) // transforma o corpo das reqs em json

export default app