import mongoose from 'mongoose'
import config from 'config'

async function connect() {

    const dbUri = config.get<string>('dbUri')

    try {
        mongoose.connect(dbUri)
        console.log('Conectado')

    } catch (e) {
        console.log('Erro ao conectar')
        console.log(e)
    }
}

export default connect