import { useState } from "react";
function Us5() {
    const [task, settask] = useState(" ")
    const [todolist, settodolist] = useState([])
    function addtask() {
        settodolist([...todolist, { id: Date.now(), name: task }])
        settask(" ")
    }
    function deletetask(id) {
        settodolist(todolist.filter((t) => t.id !== id))
    }
    return (
        <>
            <div>
                <input type="text" value={task} onChange={(e) => settask(e.target.value)} />
                <button onClick={addtask}>Add</button>
                {
                    todolist.map((t) =>
                        <div key={t.id}>
                            <h3>{t.name}</h3>
                            <button onClick={()=>deletetask(t.id)}>Delete</button>
                        </div>
                )
                }
            </div>
        </>
    )
}export default Us5