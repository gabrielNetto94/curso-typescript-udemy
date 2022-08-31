import express from 'express'
import config from 'config'
import router from './routes'
import db from '../config/db'

const app = express()
app.use('/api/', router)
//busca a porta do arquivo default
const port = config.get<number>('port')


//middleware JSON
app.use(express.json())

app.listen(port, async () => {
    
    await db()
    console.log(`server rodando porta ${port}...`)
})