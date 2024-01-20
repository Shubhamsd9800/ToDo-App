//import the models
const Todo= require("../models/Todo");

//define the route handler
exports.getTodo = async(req,res)=>{
    try{
        //fetch all todo item from the database
        const todos= await Todo.find({});

        //send a json response with a sucess flag
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:'Entire Todo data is fetched',
            }
         );    
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json(
            {
                success:false,
                error:err.message,
                message:'Server Error',
            }
        );
    }   
}

exports.getTodoById = async(req,res) => {
    try{
        //extract todo item basis on id
        const id =req.params.id;
        const todo= await Todo.findById({_id:id});

        //data forgiven id not found
        if(!todo) {
            return res.status(404).json({
                success:false,
                message:"No data found with given id",

            })
        }

        //data forgiven id FOUND
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })


    }
        catch(err){
            console.error(err);
            res.status(500)
            .json(
                {
                    success:false,
                    error:err.message,
                    message:'Server Error',
                }
            );
        } 
}