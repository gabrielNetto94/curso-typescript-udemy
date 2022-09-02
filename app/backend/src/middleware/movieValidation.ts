import {body} from 'express-validator'

export const movieCreateValidation = () => {
    return [
        body('title')
            .isString()
            .withMessage("Título obrigatório.")
            .isLength({min: 5})
            .withMessage("Título no mínimo 5 caracteres"),
        body('rating')
            .isNumeric()
            .withMessage('A nota precisa ser um número')

    ]
}