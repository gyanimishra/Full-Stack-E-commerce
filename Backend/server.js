const app= require('./app')
const dotenv= require('dotenv')
const connectedtoDatabase= require('./config/database')

// Handling Uncaught Exception  //example----write anywhere console.log(youtube)
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });

//config....
dotenv.config({ path: "config/config.env" });


//database connection

connectedtoDatabase()

const server= app.listen(process.env.PORT,()=>{
    console.log(`app is running on ${process.env.PORT}`);
})


// Unhandled Promise Rejection   example----remove db from ----mongodb
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });