function SearchBar(props) {
    return (
        <div className={props.active ? "search-bar active" : "search-bar"}>
            <div className="search-wrapper">
                <i className='bx bx-search text-2xl'></i>
                <input type="search" placeholder="Search Here..." className="search-input" />
                <i className='bx bx-x text-3xl text-red-600 cursor-pointer' onClick={() => props.onClick(false)}></i>
            </div>
        </div>
    )
}

export default SearchBar;