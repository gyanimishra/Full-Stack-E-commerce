const express= require('express');
const app= express();
const errorMiddleware= require('./middleware/error')
app.use(express.json())


//import routes

const product= require('./Routes/productRoute')
const user = require('./Routes/userRoute')


app.use('/api/v1',product)
app.use('/api/v1',user)


// Middleware for  Error
app.use(errorMiddleware)

module.exports=app


