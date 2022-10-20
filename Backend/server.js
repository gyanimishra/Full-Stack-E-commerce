const app= require('./app')
const dotenv= require('dotenv')
const connectedtoDatabase= require('./config/database')



//config....
dotenv.config({ path: "config/config.env" });


//database connection

connectedtoDatabase()

app.listen(process.env.PORT,()=>{
    console.log(`app is running on ${process.env.PORT}`);
})