export function ModalAddTask(props) {
    const task = {}

    const createTask = (key, value) => {
        task[key] = value;
    }

    const addTask = () => {
        task["key"] = props.id;
        props.setid(props.id + 1)
        props.onClick(false);
        props.settask([...props.task, task]);
    }

    return (
        <div className="modal">
            {props.addtask && (
                <div className="modal-wrapper">
                    <div className="bg-white border border-slate-400 flex flex-col p-8 rounded gap-y-4">
                        <h4 className="font-bold text-2xl">ADD YOUR TASK</h4>
                        <input type="text" placeholder="Type Your Task" className="focus:outline-none text-base border p-2 rounded" onChange={(e) => createTask("task", e.target.value)} />
                        <input type="date" placeholder="Type Your Task" className="focus:outline-none text-base border p-2 rounded" onChange={(e) => createTask("date", e.target.value)} />
                        <button className="bg-cyan-400 py-2 rounded" onClick={() => addTask()}>CONFIRM</button>
                    </div>
                </div>
            )}
        </div>
    )
}