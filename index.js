const express=require('express');
const app=express();

const DB_CON= require('./DB_connctions/dbconnect');
DB_CON();
app.use(express.json());
const guryaharout=require('./Routers/guryaharoute')
//app.use('/guryaharouter',guryaharouter)
const imgesroute=require('./Routers/sawir_route')
const users=require('./Routers/user_Route')
app.use('/guryaharout',guryaharout);

app.use('/imgesroute',imgesroute)
app.use('/users',users)


app.listen(2000,async()=>{
    console.log('server started at port 5000')
})
