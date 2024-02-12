import cors from 'cors';
import express  from 'express';
import dotenv from "dotenv"
import mongoose from 'mongoose';
import { productRouter } from './routers/productRouter';
import seedRouter from './routers/seedRouter';

dotenv.config()
const MONGODB_URL =
process.env.MONGODB_url || "mongodb://localhost/tsmironadb"
mongoose.set("strictQuery",true)

.connect(MONGODB_URL)
.then(()=>{
    console.log("connected to mongodb")

})
.catch(()=> {
    console.log("error mongodb")
})

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
);

app.use("/api/products", productRouter)
app.use("/api/seed", seedRouter)


const PORT = 4000;

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
