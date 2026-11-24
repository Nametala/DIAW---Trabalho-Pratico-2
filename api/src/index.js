import app from "./app.js"
import { conectar } from "./db/db.js";

await conectar()
app.listen(3000 , (err) => {
    if(err) {
        console.error('nao subiu', err)
        process.exit(1)
    }
    console.log('subiu na porta 3000')
})