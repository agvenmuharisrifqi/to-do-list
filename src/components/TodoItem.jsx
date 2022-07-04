import { useContext, useEffect, useMemo, useState } from 'react';
import { BASE_URL } from '../assets/js/variable';
import { DataUSer } from '../reducer/context';
import ModalDeleteTask from './ModalDeleteTask';
import NoTask from './NoTask';

function TodoItem(props) {
    const dataUser = useContext(DataUSer);
    const [dataTask, setDataTask] = useState([]);
    const [deleteTask, setDeleteTask] = useState(false);

    useEffect(() => {
        const data = dataUser.state.todo.filter(todoItem => {
            let searchWord = new RegExp(dataUser.state.search_word, "gi");
            if (props.filter === "today" && changeDate(todoItem.date) === "Today") {
                return todoItem;
            } else if (props.filter === "important" && todoItem.important) {
                return todoItem;
            } else if (props.filter === "completed" && todoItem.completed) {
                return todoItem;
            } else if (props.filter === "search" && todoItem.activity.match(searchWord)) {
                return todoItem
            } else if (props.filter === "all") {
                return todoItem
            }
        });
        setDataTask(data);
    }, [dataUser])

    let styleActivity = "font-bold text-lg",
        styleImportant = "bx text-xl transition-all duration-200 cursor-pointer";

    /**
     *  Convert DATE
     */
    const changeMonth = (month) => {
        let stringMonth = ["Jan", "Feb", "Mar", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return stringMonth.indexOf(month) + 1;
    }

    const getDate = (date) => {
        let stringDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let stringMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return `${stringDay[date.getDay()]}, ${date.getDate()} ${stringMonth[date.getMonth()]} ${date.getFullYear()}`;
    }

    const changeDate = (fullDate) => {
        const d = new Date()
        fullDate = fullDate.split(",")[1].split(' ')
        let date = fullDate[1];
        let month = changeMonth(fullDate[2]);
        let year = fullDate[3];
        let dTask = new Date(year, month, date);
        let dNow = new Date(d.getFullYear(), d.getMonth(), d.getDate());
        let diffMiliSecond = dTask.getTime() - dNow.getTime();
        let diffDay = diffMiliSecond / (1000 * 3600 * 24);
        if (diffDay > 0) {
            return getDate(dTask);
        } else if (diffDay < 0) {
            return getDate(dTask);
        } else {
            return "Today"
        }
    }

    /**
     * handle UPDATE DATA API
     */
    const updateTodoInAPI = async (id, key, value) => {
        const token = sessionStorage.getItem("token")
        let formData = new FormData();
        formData.append(key, value)
        const hitAPI = await fetch(
            `${BASE_URL}/user/todo/${id}?token=${token}`,
            {
                method: "PUT",
                body: formData
            }
        )
    }

    /**
     * handle IMPORTANT
     */
    const handleImportant = (id, value) => {
        updateTodoInAPI(id, "important", !value)
        dataUser.dispatch({ type: "TOGGLE_IMPORTANT", id: id })
    }

    /**
     * handle COMPLETED
     */
    const handleCompleted = (id, value) => {
        updateTodoInAPI(id, "completed", !value)
        dataUser.dispatch({ type: "TOGGLE_COMPLETED", id: id })
    }

    return (
        <section className="tasks py-2 gap-y-2 flex flex-col">
            {dataTask.length !== 0 ? dataTask.map(todoItem => {
                return (
                    <div key={todoItem.id} className="bg-white rounded py-2 px-4 flex items-center justify-between">
                        <div className="flex items-center">
                            <span
                                onClick={() => handleCompleted(todoItem.id, todoItem.completed)}
                                className={todoItem.completed ? 'check active' : 'check'}
                                title="The Task Is Done"></span>
                            <div>
                                <h3 className={todoItem.completed ? `${styleActivity} line-through` : styleActivity}>{todoItem.activity}</h3>
                                <div>
                                    <i className='bx bx-calendar text-slate-500 mr-2'></i>
                                    <span className={todoItem.completed ? 'line-through' : ''}>{changeDate(todoItem.date)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-2">
                            <i
                                onClick={() => handleImportant(todoItem.id, todoItem.important)}
                                className={todoItem.important ? `${styleImportant} bxs-star text-yellow-500` : `${styleImportant} bx-star text-slate-500`}
                                title="Make Tasks Important"></i>
                            <i
                                onClick={() => setDeleteTask(true)}
                                className='bx bx-trash text-xl text-red-500 transition-all duration-200 cursor-pointer'
                                title="Delete This Task" ></i>
                            <ModalDeleteTask deleteTask={deleteTask} idTask={todoItem.id} setDeleteTask={setDeleteTask} />
                        </div>
                    </div>
                )
            }) : (<NoTask />)}
        </section>
    )
}

export default TodoItem;