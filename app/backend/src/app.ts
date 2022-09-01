import express from 'express'
import config from 'config'
import router from './routes'
import db from '../config/db'
import Logger from '../config/logger'

const app = express()
app.use('/api/', router)


//busca a porta do arquivo default
const port = config.get<number>('port')


//middleware JSON
app.use(express.json())

app.listen(port, async () => {
    
    await db()
    Logger.info(`server rodando porta ${port}...`)
})