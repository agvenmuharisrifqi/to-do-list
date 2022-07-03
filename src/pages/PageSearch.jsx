import TodoItem from "../components/TodoItem";

function PageSearch(props) {
    return (
        <div className="section-wrapper flex-auto overflow-auto my-4">
            <h1 className="title text-white font-bold text-2xl">Search Result</h1>
            <TodoItem />
        </div>
    )
}

export default PageSearch;