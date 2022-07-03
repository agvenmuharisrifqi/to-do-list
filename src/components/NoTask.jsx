function NoTask(props) {
    return (
        <div className="bg-white rounded py-2 px-4 flex items-center justify-between">
            <div className="flex items-center">
                <span className="check" id="todo-check" title="The Task Is Done"></span>
                <div>
                    <h3 className="font-bold text-lg">You don't have a to do list</h3>
                    <div>
                        <i className='bx bx-calendar text-slate-500 mr-2'></i>
                        <span>Not date</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-x-2">
                <i className='bx bx-star text-xl text-slate-500 transition-all duration-200 cursor-pointer' title="Make Tasks Important"
                ></i>
                <i className='bx bx-trash text-xl text-red-500 transition-all duration-200 cursor-pointer' title="Delete This Task" ></i>
            </div>
        </div>
    )
}

export default NoTask;