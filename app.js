require('dotenv').config();
const express = require(`express`);
const app = express();
const port = 8000;
const connectDB = require('./db/connect');
const router = require('./router/queRoutes');
const cors = require(`cors`);


app.use(cors());
app.use(express.json());
app.use('/api/v1/question',router);

const start = async(url)=>{
    try{
        await connectDB(url);
        app.listen(port,()=>{
            console.log(`App is listening at port ${port}`)
        })
    }catch(err){
        console.log(err);
    }
}
start(process.env.MONGO_URI);