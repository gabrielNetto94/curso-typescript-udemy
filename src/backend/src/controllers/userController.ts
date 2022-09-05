import {Request, Response} from 'express'
import {UserModel} from '../models/UserModel'
import logger from '../../config/logger'

export async function createuser(req: Request, res: Response) {

    try {

        const data = req.body

        const user = await UserModel.create(data)

        return res.status(201).json(user)

    } catch (error) {
        logger.error(`Erro ao criar user ${error}`)
        return res.status(500).json({error})
    }
}

export async function finduserById(req: Request, res: Response) {
    try {
        const id = req.params.id
        const user = await UserModel.findById(id)

        console.log(user)
        if (!user) {
            return res.status(404).json({message: 'user not found'})
        }

        return res.json(user)

    } catch (error: any) {

        logger.error(`Erro ao buscar user ${error}`)
        return res.status(500).json({error})
    }

}

export async function getAllusers(req: Request, res: Response) {
    try {

        const users = await UserModel.find()

        if (!users) {
            return res.status(404).json({message: 'users not found'})
        }

        return res.json(users)

    } catch (error: any) {

        logger.error(`Erro ao buscar user ${error}`)
        return res.status(500).json({error})
    }
}

export async function removeuser(req: Request, res: Response) {
    try {

        const id = req.params.id
        const user = await UserModel.findById(id)

        if (!user) {
            return res.status(404).json({message: 'user not found'})
        }

        await user.delete()

        return res.json({message: `user ${id} deleted`})

    } catch (error: any) {

        logger.error(`Erro ao buscar user ${error}`)
        return res.status(500).json({error})
    }
}

export async function updateuser(req: Request, res: Response) {
    try {

        const id = req.params.id
        const data = req.body

        const user = await UserModel.findById(id)

        if (!user) {
            return res.status(404).json({message: 'user not found'})
        }

        await UserModel.updateOne({_id: id}, data)

        return res.json({message: data})

    } catch (error: any) {

        logger.error(`Erro ao buscar user ${error}`)
        return res.status(500).json({error})
    }
}