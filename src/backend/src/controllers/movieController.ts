import {Request, Response} from 'express'
import {MovieModel} from '../models/MovieModel'
import logger from '../../config/logger'

export async function createMovie(req: Request, res: Response) {

    try {

        const data = req.body

        const movie = await MovieModel.create(data)

        return res.status(201).json(movie)

    } catch (error) {
        logger.error(`Erro ao criar movie ${error}`)
        return res.status(500).json({error})
    }
}

export async function findMovieById(req: Request, res: Response) {
    try {
        const id = req.params.id
        const movie = await MovieModel.findById(id)

        console.log(movie)
        if (!movie) {
            return res.status(404).json({message: 'movie not found'})
        }

        return res.json(movie)

    } catch (error: any) {

        logger.error(`Erro ao buscar movie ${error}`)
        return res.status(500).json({error})
    }

}

export async function getAllMovies(req: Request, res: Response) {
    try {

        const movies = await MovieModel.find()

        if (!movies) {
            return res.status(404).json({message: 'movies not found'})
        }

        return res.json(movies)

    } catch (error: any) {

        logger.error(`Erro ao buscar movie ${error}`)
        return res.status(500).json({error})
    }
}

export async function removeMovie(req: Request, res: Response) {
    try {

        const id = req.params.id
        const movie = await MovieModel.findById(id)

        if (!movie) {
            return res.status(404).json({message: 'movie not found'})
        }

        await movie.delete()

        return res.json({message: `movie ${id} deleted`})

    } catch (error: any) {

        logger.error(`Erro ao buscar movie ${error}`)
        return res.status(500).json({error})
    }
}

export async function updateMovie(req: Request, res: Response) {
    try {

        const id = req.params.id
        const data = req.body

        const movie = await MovieModel.findById(id)

        if (!movie) {
            return res.status(404).json({message: 'movie not found'})
        }

        await MovieModel.updateOne({_id: id}, data)

        return res.json({message: data})

    } catch (error: any) {

        logger.error(`Erro ao buscar movie ${error}`)
        return res.status(500).json({error})
    }
}