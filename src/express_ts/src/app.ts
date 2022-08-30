import express, { NextFunction, Request, Response } from "express";

const app = express()

app.use(express.json())

function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path)
    next()
}
app.use(showPath)

app.get('/', (req, res) => {
    return res.send('<h1>Oi =)</h1>')
})

app.post('/api/produtos', (req, res) => {
    console.log(req.body)
    return res.json(req.body)
})

app.all('/api/product/check', (req, res) => {
    if (req.method === 'POST') {

        res.send("POST")
    } else if (req.method === 'GET') {
        res.send("GET")
    } else {
        res.send('nÃO SEI LIDAR COM ISSO')
    }
})

//interfaces
app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send('interfaces')
})

//JSON
app.get("/api/json", (req: Request, res: Response) => {
    return res.json({
        text: 'Olá',
        array: [
            "123",
            "asdas",
            "aisdi"
        ]
    })
})

//req param
app.get("/api/param/:id", (req: Request, res: Response) => {

    return res.json({
        param: req.params.id
    })
})

//req multiparams
app.get("/api/param/:id/teste/:id_teste", (req: Request, res: Response) => {

    return res.json({
        param1: req.params.id,
        param2: req.params.id_teste
    })
})

function getUser(req: Request, res: Response) {

    console.log(req.params.id)

    res.json({ param: req.params.id })
}
//router handler
app.get("/api/handler/:id", getUser)


//midleware
function checkUser(req: Request, res: Response, next: NextFunction) {

    console.log('oi =)')
    next()
}
app.get("/api/midleware/:id", checkUser, (req: Request, res: Response) => {

    console.log('tchau =)')
    return res.json({ msg: "Olá" })
})

//req e res com generics
app.get('/api/user/:id/details/:name', (req: Request<{ id: string, name: string }>, res: Response<{ status: boolean }>) => {

    const { id, name } = req.params
    console.log(`id ${id}`)
    console.log(`name ${name}`)

    return res.json({ status: false })
})

//try catch
app.get('/api/error', (req: Request, res: Response) => {
    try {
        throw new Error('error')
    } catch (e: any) {
        return res.status(500).json({ error: e.message })
    }
})

//run server
app.listen(3333, () => {
    console.log('Server rodando...')
})
