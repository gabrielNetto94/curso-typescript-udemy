import express from "express";

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    return res.send('<h1>1231</h1>')
})

app.post('/api/produtos',(req,res)=>{
    console.log(req.body)
    return res.json(req.body)
})

app.all('/api/product/check',(req,res)=>{
    if(req.method === 'POST'){

        res.send("POST")
    }else if(req.method === 'GET'){
        res.send("GET")
    }else{
        res.send('nÃO SEI LIDAR COM ISSO')
    }
})

app.listen(3333,()=>{
    console.log('oi')
})
