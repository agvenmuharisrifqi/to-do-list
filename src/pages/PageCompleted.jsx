import React from "react";
import TodoItem from "../components/TodoItem";

function PageCompleted(props) {

    return (
        <div className="section-wrapper flex-auto overflow-auto my-4">
            <h1 className="title text-white font-bold text-2xl">Your Completed Tasks</h1>
            <TodoItem filter={"completed"} />
        </div>
    )
}

export default PageCompleted;