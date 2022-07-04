import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataUSer } from '../reducer/context';

function SearchBar(props) {
    const dataUser = useContext(DataUSer);
    const navigate = useNavigate();

    const closeButton = () => {
        props.onClick(false)
        navigate("/to-do-list")
    }

    const handleSearchWord = (e) => {
        dataUser.dispatch({ type: "UPDATE_SEARCH_WORD", search_word: e.target.value })
    }

    return (
        <div className={props.active ? "search-bar active" : "search-bar"}>
            <div className="search-wrapper">
                <i className='bx bx-search text-2xl'></i>
                <input
                    type="search"
                    className="search-input"
                    onChange={(e) => handleSearchWord(e)}
                    placeholder="Search Here..." />
                <i className='bx bx-x text-3xl text-red-600 cursor-pointer' onClick={() => closeButton()}></i>
            </div>
        </div>
    )
}

export default SearchBar;