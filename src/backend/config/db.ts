import mongoose from 'mongoose'
import config from 'config'
import logger from './logger'

async function connect() {

    const dbUri = config.get<string>('dbUri')

    try {
        mongoose.connect(dbUri)
        logger.info('Conectado ao banco de dados')

    } catch (e) {
        logger.error('Erro ao conectar')
        logger.error(e)
        process.exit(1)
    }
}

export default connect