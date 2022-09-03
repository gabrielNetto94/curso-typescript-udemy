import express from 'express'
import config from 'config'
import routes from './routes'
import db from '../config/db'
import Logger from '../config/logger'
import morganMiddlware from './middleware/morganMiddlware'

const app = express()

//busca a porta do arquivo default
const port = config.get<number>('port')

//middlware para log das rotas
app.use(morganMiddlware)

//middleware JSON
app.use(express.json())

//utiliza as rotas do sistema
app.use('/api/', routes)

app.listen(port, async () => {
    
    //conecta banco
    await db()

    Logger.info(`server rodando porta ${port}...`)
})