import {model, Schema} from 'mongoose'

const userSchema = new Schema(
    {
        username: {type: String},
        password: {type: Number},
    },
    {
        timestamps: true
    }
)

export const UserModel = model("User", userSchema)