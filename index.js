import express from 'express';
import dotenv from "dotenv";
import morgan from 'morgan';
import conncetDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import cors from 'cors'



const port = process.env.PORT || 5000;
const app = express()
dotenv.config();
conncetDB();
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1/auth', authRoutes);



app.get('/', (req, res)=>{
    res.send("<h1>Welcome to my server</h1>")
})




const uri = "mongodb+srv://<username>:<password>@cluster0.fiuga7j.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
})