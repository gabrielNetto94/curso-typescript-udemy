import express from 'express'
import config from 'config'

const app = express()

//busca a porta do arquivo default
const port = config.get<number>('port')

//middleware JSON
app.use(express.json())

app.listen(port, async () => {
    console.log(`server rodando porta ${port}...`)
})