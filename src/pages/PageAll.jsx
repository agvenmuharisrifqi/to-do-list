import React, { useEffect } from "react";
import TodoItem from "../components/TodoItem";

function PageAll(props) {

    return (
        <div className="section-wrapper flex-auto overflow-auto my-4">
            <h1 className="title text-white font-bold text-2xl">All Your Tasks</h1>
            <TodoItem filter={"all"} />
        </div>
    )
}

export default PageAll;