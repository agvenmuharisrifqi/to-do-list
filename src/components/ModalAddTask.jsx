import { useContext, useState } from "react";
import { BASE_URL } from "../assets/js/variable";
import { DataUSer } from "../reducer/context";

function ModalAddTask(props) {
    const dataUser = useContext(DataUSer)

    const [taskName, setTaskName] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [checkInput, setCheckInput] = useState(false)

    /**
    * handle ADD NEW DATA API
    */
    const addTodoInAPI = async (token, key, value) => {
        let formData = new FormData();
        for (let i = 0; i < Math.min(key.length, value.length); i++) {
            formData.append(key[i], value[i]);
        }
        const hitAPI = await fetch(
            `${BASE_URL}/user/todo?token=${token}`,
            {
                method: "POST",
                body: formData
            }
        )
        const response = await hitAPI.json()
        if (hitAPI.ok) {
            const result = response;
            dataUser.dispatch({ type: "ADD_TODO_ITEM", todo: result })
            props.setAddTask(false)
        } else {
            props.setAddTask(true);
        }
    }

    /**
     * handle ADD NEW TASK
     */
    const handleAddNewTask = () => {
        if (taskName && taskDate) {
            setCheckInput(false)
            const token = sessionStorage.getItem("token")
            const todo = addTodoInAPI(token, ["activity", "date"], [taskName, taskDate])
        } else {
            setCheckInput(true)
        }
    }

    return (
        <div className="modal">
            {props.addTask && (
                <div className="modal-wrapper">
                    <div className="bg-white border border-slate-400 flex flex-col p-8 rounded gap-y-4">
                        <h4 className="font-bold text-2xl">ADD YOUR TASK</h4>
                        <input
                            onChange={(e) => setTaskName(e.target.value)}
                            type="text"
                            placeholder="Type Your Task"
                            className="focus:outline-none text-base border p-2 rounded" />
                        <input
                            onChange={(e) => setTaskDate(e.target.value)}
                            type="date"
                            placeholder="Type Your Task"
                            className="focus:outline-none text-base border p-2 rounded" />
                        <span className={checkInput ? "text-sm text-red-500" : "text-sm text-red-500 hidden"}>Name and Date can't be empty!</span>
                        <div className="flex justify-between">
                            <button
                                onClick={() => handleAddNewTask()}
                                className="bg-cyan-400 py-2 rounded px-10 mr-2">
                                CONFIRM
                            </button>
                            <button
                                onClick={() => props.setAddTask(false)}
                                className="bg-red-400 py-2 rounded px-10 ml-2">
                                CANCEL
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}


export default ModalAddTask;