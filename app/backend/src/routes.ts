import {Router, Request, Response} from 'express'

import auth from './middleware/auth'

//controllers
import {createMovie, findMovieById, getAllMovies, removeMovie, updateMovie} from './controllers/movieController'
import {login} from './controllers/loginController'

//validations
import {validate} from './middleware/handleValidation'
import {movieCreateValidation} from './middleware/movieValidation'

const router = Router()

export default router.get('/test', auth, (req: Request, res: Response) => {
    res.status(200).json({message: 'Api working!'})
})
    .post('/movie', movieCreateValidation(), validate, createMovie)
    .get('/movie/:id', findMovieById)
    .get('/movie', getAllMovies)
    .delete('/movie/:id', removeMovie)
    .patch('/movie/:id', movieCreateValidation(), validate, updateMovie)
    .post('/login', login)