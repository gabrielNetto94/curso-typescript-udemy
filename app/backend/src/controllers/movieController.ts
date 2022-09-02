import {Request, Response} from 'express'
import {MovieModel} from '../models/Movie'
import logger from '../../config/logger'

export async function createMovie(req: Request, res: Response) {

    try {
        const data = req.body
        const movie = await MovieModel.create(data)
        return res.status(200).json(movie)
    } catch (error) {
        logger.error(`Erro ao criar movie ${error}`)
    }
}