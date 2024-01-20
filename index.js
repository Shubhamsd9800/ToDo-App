const express= require("express");
const app=express();

//load the env file
require("dotenv").config();
const PORT=process.env.PORT || 4000;

//Need middleware to parse json request body
app.use(express.json());

//import route for TODO API
const todoRoutes=require("./routes/todos");

//mount the todo API routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`);

})

//connect to the database
const dbConnect= require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1> This is a HOMEPAGE Laureeee`);
    
})
