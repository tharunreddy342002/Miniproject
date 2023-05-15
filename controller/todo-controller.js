import todo from "../model/Todo.js"


export const addTodo = async(request,response) => {
try{
    const newTodo =await todo.create({

        data:request.body.data,
        createAT:Date.now()

    })
    
       await newTodo.save();

       response.status(200).json(newTodo)
    }catch(error){
        return response.status(500).json(error.message);
    }
}

export const getAllTodos = async(request,response) => {

    try{
    
      const todos = await todo.find({}).sort({ 'createdAt': -1 })

       return response.status(200).json(todos);
    }catch(error){
        return response.status(500).json(error.message);
    }
}


export const toggleTodoDone = async(request,response) => {

    try{
    
        const todoRef = await todo.findById(request.params.id);

        const todolist = await todo.findOneAndUpdate(

            { _id: request.params.id },
            { done: !todoRef.done }

        )
        await todolist.save();
       
        return response.status(200).json(todolist)
    }catch(error){
        return response.status(500).json(error.message);
    }
}


export const updateTodo = async(request,response) => {

    try{
    
        // const todoRef = await todo.findById(request.params.id);

         await todo.findOneAndUpdate(

            { _id: request.params.id },
            { data: request.body.data }

        )
        const todolist = await todo.findById(request.params.id)
        // await todolist.save();
       
        return response.status(200).json(todolist)
    }catch(error){
        return response.status(500).json(error.message);
    }
}

export const deleteTodo = async(request,response) => {

    try{
    
        // const todoRef = await todo.findById(request.params.id);

        const todolist =await todo.findByIdAndDelete(request.params.id)

            // { _id: request.params.id },
            // { data: request.body.data }

        
        // const todolist = await todo.findById(request.params.id)
        // await todolist.save();
       
        return response.status(200).json(todolist)
    }catch(error){
        return response.status(500).json(error.message);
    }
}