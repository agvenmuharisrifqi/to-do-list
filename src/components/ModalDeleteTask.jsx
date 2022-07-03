import { useContext } from "react";
import { BASE_URL } from "../assets/js/variable";
import { DataUSer } from "../reducer/context";

function ModalDeleteTask(props) {
    const dataUser = useContext(DataUSer);
    const deleteTask = async () => {
        const token = sessionStorage.getItem("token")
        const hitAPI = await fetch(
            `${BASE_URL}/user/todo/${props.idTask}?token=${token}`,
            {
                method: "DELETE"
            }
        )
    }

    const handleRemoveTask = () => {
        deleteTask()
        dataUser.dispatch({ type: "REMOVE_TODO_ITEM", id: props.idTask })
        props.setDeleteTask(false)
    }
    return (
        <div
            className="modal">
            {props.deleteTask && (
                <div
                    className="modal-wrapper">
                    <div
                        className="bg-white border border-slate-400 flex flex-col p-8 rounded gap-y-4 max-w-sm">
                        <h4
                            className="font-bold text-2xl text-center">
                            Are you sure?
                        </h4>
                        <div>
                            <p className="text-center">Want to delete this task.</p>
                            <div className="flex gap-x-4">
                                <button
                                    onClick={() => handleRemoveTask()}
                                    className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-400 mt-4">
                                    DELETE
                                </button>
                                <button
                                    onClick={() => props.setDeleteTask(false)}
                                    className="bg-cyan-500 text-white w-full py-2 rounded hover:bg-cyan-400 mt-4">
                                    NO
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ModalDeleteTask;