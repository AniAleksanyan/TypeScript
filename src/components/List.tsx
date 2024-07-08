import { useContext } from "react"
import { ToDoContext } from "../context"

export const List = () => {
    const context = useContext(ToDoContext)
    if (!context) {
        throw new Error("Context is Undefined");
    }

    return <div className="list">
        {
            context.items.map(elm => {
                return <div key={elm.id} className={ elm.completed ? "done" : ""}>
                    <p>{elm.text}</p>
                    <button onClick={()=>context.update(elm.id)}>{elm.completed ? "Cancel" : "Finish"}</button>
                </div>
            })
        }
    </div>
}