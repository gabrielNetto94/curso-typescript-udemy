import {Request, Response, NextFunction} from "express"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
//import User from '../models/UserModel'

export default function verifyJWT(req: Request, res: Response, next: NextFunction) {

        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (!token) return res.status(401).json({
            auth: false,
            message: 'No token provided.'
        })

        jwt.verify(token, process.env.KEY_TOKEN!, async function (err: any, decoded: any) {

            if (err) return res.status(403).json({
                auth: false,
                message: 'Failed to authenticate token.'
            })

            //buscar usuário e setar na request
            // const user = await User.findByPk(decoded.id)

            // req.user = user

            next()
        })
    }
