import Todos from "./components/Todos"

function App() {

  return (
    <div className="h-screen flex flex-col items-center justify-center w-full">
      
      <h1 className="text-3xl font-bold">To-Do App</h1>

      <div className="w-11/12 mx-auto p-10">
        <Todos/>
      </div>
    </div>
  )
}

export default App
