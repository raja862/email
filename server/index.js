import express from "express"
import dotenv from "dotenv"
import mongoData from "./mongos/datamongoos.js"
import cors from "cors"
import routeruser from "./userrouter/router.js"


const app=express()
mongoData()
dotenv.config()
app.use(cors())
app.use(express.json())
app.use('/api', routeruser)

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`app is running port ${port}`)
})

