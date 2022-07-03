import React from "react";
import TodoItem from "../components/TodoItem";

function PageToday(props) {

    return (
        <div className="section-wrapper flex-auto overflow-auto my-4">
            <h1 className="title text-white font-bold text-2xl">Your Today Tasks</h1>
            <TodoItem filter={"today"} />
        </div>
    )
}

export default PageToday;