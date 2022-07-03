import { useNavigate } from 'react-router-dom';

function SearchBar(props) {
    const navigate = useNavigate();
    const closeButton = () => {
        props.onClick(false)
        navigate("/")
    }
    return (
        <div className={props.active ? "search-bar active" : "search-bar"}>
            <div className="search-wrapper">
                <i className='bx bx-search text-2xl'></i>
                <input type="search" placeholder="Search Here..." className="search-input" />
                <i className='bx bx-x text-3xl text-red-600 cursor-pointer' onClick={() => closeButton()}></i>
            </div>
        </div>
    )
}

export default SearchBar;