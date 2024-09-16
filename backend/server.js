const express=require('express');
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const articleRoutes = require('./routes/articleRoutes');




dotenv.config();
connectDB();

const app=express();

app.use(express.json());

app.use('/api/articles', articleRoutes);


app.get('/',(req,res)=>{
    res.send('Home page');
});

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}/`);
    
})