import jwt from 'jsonwebtoken'
//import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()
import {Request,Response,NextFunction} from 'express'

export async function login(req:Request, res:Response, next:NextFunction) {

        try {

            const { email, password } = req.body

            const id = 1

            const token = jwt.sign({ id }, process.env.KEY_TOKEN!, {
                expiresIn: 100000
            })

            return res.json({
                id,
                auth: true,
                token: token
            })

            // const user = await User.findOne({
            //     where: {
            //         email
            //     }
            // })

            // if (!user)
            //     return res.status(400).json({ error: 'User no found' })

            // if (await bcrypt.compare(password, user.password)) {

            //     const id = user.dataValues.id

            //     const token = jwt.sign({ id }, process.env.KEY_TOKEN!, {
            //         expiresIn: 30000
            //     })

            //     return res.json({
            //         id,
            //         auth: true,
            //         token: token
            //     })
            // }

            return res.status(400).json({ error: 'Password invalid' })

        } catch (error:any) {
            return res.status(500).json({ error: error.message })
        }
}