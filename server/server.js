const express=require('express');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});
const cors=require('cors');
const mongoose=require('mongoose');

mongoose.connect(process.env.MONGO_URL).then(()=>{
console.log("Database Connected");
}).catch(e=>console.log(e));

const app=express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

const user_Routes=require('./routes/user_route');

app.use('/users',user_Routes);

app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on PORT ${process.env.PORT}`);
})