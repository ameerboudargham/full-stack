import express, { Request , Response } from "express"
import { SampleProducts } from "./data"

const app = express ()
app.get("/api/products",( req:Request, res: Response)=>{
    res.json(SampleProducts)
})
const Port = 4000
app.listen(Port,()=>{
    console.log("server started at http://localhost:${PORT}")
})