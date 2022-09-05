import dotenv from 'dotenv'
dotenv.config()

const dbUser = process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD

export default {
    port: 3000,
    dbUser,
    dbPassword,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.zo2z34h.mongodb.net/db_typescript?retryWrites=true&w=majority`,
    env: 'development'
}