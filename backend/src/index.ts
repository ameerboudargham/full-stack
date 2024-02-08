import express, { Request , Response } from "express"
import { SampleProducts } from "./data"
import cors from "cors"

const app = express ()
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    next();
});
app.get("/api/products",( req:Request, res: Response)=>{
    res.json(SampleProducts)
})
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});