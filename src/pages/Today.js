import React from "react";

function Today(props){
    const colorDate = {
        color: "#94a3b8",
    }
    const changeColorDate = (date_task) => {
        date_task = date_task.split('-')
        const date = new Date();
        const dNow = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        const dTask = new Date(date_task[0], date_task[1] - 1, date_task[2]);
        const diffMiliSec = dTask.getTime() - dNow.getTime();
        const diffDay = diffMiliSec / (1000 * 3600 * 24);
        if (diffDay === 0){
            date_task = "Today";
            colorDate.color = "#60a5fa";
            return date_task;
        }else if (diffDay < 0){
            colorDate.color = "#f87171";
        }
        date_task = dTask.toLocaleDateString().split("/")
        date_task[0] = date_task[0].length === 2 ? date_task[0] : "0" + date_task[0]
        date_task[1] = date_task[1].length === 2 ? date_task[1] : "0" + date_task[1]
        return `${date_task[0]}-${date_task[1]}-${date_task[2]}`;
    }

    const deleteData = (key) => {
        const data = props.task.filter(item => item.id !== key);
        props.settask(data)
    }
    return (
        <div className="section-wrapper flex-auto overflow-auto my-4">
            <h1 className="title text-white font-bold text-2xl">Your Today Tasks</h1>
            {/* Start Home or Today */}
            <section className="tasks py-2 gap-y-2 flex flex-col">
                {props.task.map((item) => {
                    return (
                        <div key={item.id} className="bg-white rounded py-2 px-4 flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="check" id="todo-check" title="The Task Is Done"></span>
                                <div>
                                    <h3 className="font-bold text-lg">{item.task}</h3>
                                    <div>
                                        <i className='bx bx-calendar text-slate-500 mr-2'></i>
                                        <span id="information-date" style={colorDate}>{changeColorDate(item.date)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-x-2">
                                <i className='bx bx-star text-xl text-slate-500 transition-all duration-200 cursor-pointer' title="Make Tasks Important"></i>
                                <i className='bx bx-trash text-xl text-red-500 transition-all duration-200 cursor-pointer' title="Delete This Task" onClick={deleteData(item.id)}></i>
                            </div>
                        </div>
                    )
                })}
            </section>
            {/* End Home or Today */}
        </div>
    )
}

export default Today;