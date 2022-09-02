import {Request, Response, NextFunction} from 'express'
import {validationResult} from 'express-validator'

export const validate = (req: Request, res: Response, next: NextFunction) => {
    
    const errors = validationResult(req)

    //se não tiver erro, continua
    if (errors.isEmpty()) {
        return next()
    }

    //criar array de obj
    const extractecErrors: object[] = []

    //passa o array de erros para o extractecErrors
    errors.array().map((error) => extractecErrors.push(
        {[error.param]: error.msg})
    )

    //retorna o array de erros
    return res.status(422).json({
        errors: extractecErrors
    })
}
