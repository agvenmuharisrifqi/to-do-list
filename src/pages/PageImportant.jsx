import React from "react";
import TodoItem from "../components/TodoItem";

function PageImportant(props) {

    return (
        <div className="section-wrapper flex-auto overflow-auto my-4">
            <h1 className="title text-white font-bold text-2xl">Your Important Tasks</h1>
            <TodoItem filter={"important"} />
        </div>
    )
}

export default PageImportant;