import {body} from "express-validator";

export const movieCreateValidation = () => {
    return [
        body("username")
            .isString()
            .withMessage("username é obrigatório.")
            .isLength({min: 5})
            .withMessage("username precisa ter no mínimo 5 caracteres."),
        body("password")
            .isString()
            .withMessage("password é obrigatório.")
            // .custom((value: number) => {
            //     if (value < 0 || value > 10) {
            //         throw new Error("password precisa ter letra, número");
            //     }
            //     return true;
            // }),

    ];
};
