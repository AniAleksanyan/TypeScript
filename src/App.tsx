import { useState } from 'react'
import './App.css'
import { ToDoList } from './components/ToDoList'
import { IToDo } from './type';
import { ToDoContext } from './context';

function App() {
  const [toDos, setToDos] = useState<IToDo[]>([
    {id: 101, text: "Drink", completed:false},
    {id: 102, text: "Write Code", completed:true},
    {id: 103, text: "Go to Dance", completed:false},
    {id: 104, text: "Watch Films", completed:false},
  ]);

  const update = (id:number) => {
    setToDos(toDos.map( elm =>
      elm.id != id ? elm : {...elm, completed: !elm.completed}
    ))
  }

  return (
    <>
      <ToDoContext.Provider value={{items: toDos, update}}>
        <ToDoList />
      </ToDoContext.Provider>
    </>
  )
}

export default App
