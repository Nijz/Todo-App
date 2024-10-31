import { useState } from "react"
import ListTodo from "./ListTodo"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo } from "../slices/todoSlice"



const Todos = () => {


    const [newTodo, setNewTodo] = useState("")
    const todos = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    const addNewTodo = () => {
        
        dispatch(addTodo(newTodo))
        setNewTodo("")
    }

    const deleteNewTodo = (id) => {
        
        dispatch(deleteTodo(id))

    }

  return (
    <div className="flex flex-col items-center justify-center">
        
        <div className="flex justify-center items-center gap-4 mt-10 w-11/12 mx-auto">
           
            <input
                type="text"
                placeholder="Add a todo"
                className="border-[1px] border-slate-200 rounded-md p-3 w-full shadow-sm"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />

            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded"
                onClick={addNewTodo}
            >
                Add
            </button>

        </div>

        <div className="w-11/12 mx-auto mt-10 flex flex-col justify-center">
            
            <h1>
                List of todos
            </h1>

            <ListTodo 
                todos={todos}
                deleteTodo={deleteNewTodo}
            />

            <div className="mt-10 flex justify-center items-center gap-5">
                <p>
                    Total Todos: {todos.length}
                </p>

                <button 
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-10 rounded"
                >
                    Clear all
                </button>
            </div>
        </div>
    </div>
  )
}

export default Todos
