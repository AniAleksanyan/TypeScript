import { useContext, useState } from "react";
import { ToDoContext } from "../context";

export const AddToDo = () => {
    const context = useContext(ToDoContext);
    const [inputText, setInputText] = useState("");
    const [count, setCount] = useState(102);
    if (!context) {
        throw new Error("Context is Undefined");
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setCount(count+1);

        const newTodo = { id: count, text: inputText, completed: false }; 
        context.addList([...context.items, newTodo])
        setInputText(""); 
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={inputText} 
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button type="submit">Save</button>
            </form>
        </>
    );
};
