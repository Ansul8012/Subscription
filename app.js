import express from 'express';
import {PORT} from './config/env.js'
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'
import connectToDB from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js'
import cookieParser from 'cookie-parser';

const app=express();

app.use(errorMiddleware);
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions',subscriptionRouter);

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/routes',(req,res)=>{
    res.send('You are on Routes')
})

app.listen(PORT,async()=>{
    console.log(`you are running in ${PORT} port`)
    await connectToDB();
});