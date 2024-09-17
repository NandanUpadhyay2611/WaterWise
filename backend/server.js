
const express=require('express');
const cors=require('cors')
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const articleRoutes = require('./routes/articleRoutes');
const userRoutes = require('./routes/userRoutes');
const { waterUsageCalc } = require('./controllers/waterUsageCalc');


dotenv.config();
connectDB();

const app=express();

app.use(express.json());
app.use(cors());

app.use('/api/articles', articleRoutes);

// Use User routes
app.use('/api/users', userRoutes);
<<<<<<< HEAD
=======
// app.use('/api/watercalc',waterUsageCalc)
>>>>>>> e464f2e38eaa3fad6cb7f1530321d7fec9cf6000


app.get('/',(req,res)=>{
    res.send('Home page');
});

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}/`);
    
})
