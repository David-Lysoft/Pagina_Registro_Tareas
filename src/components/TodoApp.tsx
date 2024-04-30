import { useState } from "react"
import { ListaTareas } from "./ListaTareas";


export const TodoApp = () => {
    const [nuevaTarea,SetNuevaTarea] = useState<string>("");
    const [listaTareas,SetListaTareas] = useState<string[]>([]);
    
    const handleAddTask = () =>{
        if(nuevaTarea.trim() === '') return 
        SetListaTareas(TareaAnterior => [...TareaAnterior,nuevaTarea])
        SetNuevaTarea('')
    }

    const handleBorrartarea = (index:number) =>{
        SetListaTareas(tareas => tareas.filter((_,i) => i !== index))
    }

  return (
    <div>
        <h1>Lista de tareas</h1>
        <div>
            <input
            type="text"
            value={nuevaTarea}
            onChange={(e) => SetNuevaTarea(e.target.value)}
            placeholder="Nueva tarea"
            />
            <button onClick={handleAddTask}>Agregar</button>
        </div>
        <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrartarea}></ListaTareas>
    </div>

  )
}