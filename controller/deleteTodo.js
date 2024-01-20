//import the models
const Todo= require("../models/Todo");

//define the route handler
exports.deleteTodo = async(req,res)=>{
    try{
        const {id}=req.params;
        
        await Todo.findByIdAndDelete(id);

        //send a json response with a sucess flag
        res.status(200).json(
            {
                success:true,
                message:'TODO Deleted',
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
