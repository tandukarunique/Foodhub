import express from "express"
import cors from "cors"


//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//request data from server lai use huncha
app.get("/",(req,res)=>{
    res.send("Api Working")

})