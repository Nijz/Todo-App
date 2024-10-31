/* eslint-disable react/prop-types */


const ListTodo = ({ todos, deleteTodo }) => {

  return (
    <div className="mt-2 bg-slate-100 rounded-md p-4">
        <div className="flex flex-col gap-2">
            {todos.map((todo) => (
                <div key={todo.id} className="flex justify-between items-center">
                    <div className="text-xl">{todo.text}</div>
                    <button 
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                        onClick={() => deleteTodo(todo.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ListTodo
