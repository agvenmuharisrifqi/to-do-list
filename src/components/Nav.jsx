import { useState, useContext } from "react";
import { DataUSer } from "../reducer/context";
import { Outlet, Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import ModalSigIn from "./ModalSignIn";
import ModalAddTask from "./ModalAddTask";

function Nav(props) {
    const dataUser = useContext(DataUSer)

    const [navbar, setNavbar] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    const [addTask, setAddTask] = useState(false)


    const toggleNavbar = (e) => {
        let check = navbar ? false : true;
        setNavbar(check);
    }

    const activeSearchBar = (e) => {
        e.preventDefault();
        setSearchBar(true);
        setNavbar(false);
    }

    return (
        <main className='main'>
            <div className="px-4 py-8 flex flex-col justify-between h-full sm:container">
                <nav className="navbar">
                    <div className="account flex gap-4 items-center">
                        <img src="https://avatars.dicebear.com/api/adventurer/jhonot.svg?b=%23ff9e9e" alt="Your avatar"
                            height="50" width="50" className="rounded-full hidden xs:block" />
                        <div>
                            <Link
                                to={"/"}
                                className="font-bold text-lg hover:text-green-900">
                                {dataUser?.state?.name ? dataUser.state.name : "Type your name"}
                            </Link>
                            <p className="text-slate-500" title="Max 20 Characters">
                                {dataUser?.state?.status ? dataUser.state.status : "Type your status"}
                            </p>
                        </div>
                    </div>
                    <div className="toggle-nav cursor-pointer lg:hidden">
                        <i className='bx bx-menu text-4xl text-slate-600' onClick={(e) => toggleNavbar(e)}></i>
                    </div>
                    <ul className={navbar ? "hidden lg:flex cursor-pointer nav-wrapper active" : "hidden lg:flex cursor-pointer nav-wrapper"}>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => (isActive ? "nav-link active" : 'nav-link')}
                                to={"/"}>
                                <i className='bx bx-calendar-check text-stone-400 transition-all duration-200 mr-1'></i>
                                Today
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => (isActive ? "nav-link active" : 'nav-link')}
                                to={"/all"}>
                                <i className='bx bx-edit text-cyan-400 transition-all duration-200 mr-1'></i>
                                All
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => (isActive ? "nav-link active" : 'nav-link')}
                                to={"/important"}>
                                <i className='bx bx-star text-amber-400 transition-all duration-200 mr-1'></i>
                                Important
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => (isActive ? "nav-link active" : 'nav-link')}
                                to={"/completed"}>
                                <i className='bx bx-check-circle text-red-400 transition-all duration-200 mr-1'></i>
                                Completed
                            </NavLink>
                        </li>
                        <li className="nav-item" onClick={(e) => activeSearchBar(e)}>
                            <NavLink
                                className={({ isActive }) => (isActive ? "nav-link active" : 'nav-link')}
                                to={"/search"} >
                                <i className='bx bx-search text-fuchsia-400 transition-all duration-200 mr-1'></i>
                                Search
                            </NavLink>
                        </li>
                    </ul>
                    <SearchBar active={searchBar} onClick={setSearchBar} />
                </nav>
                <Outlet />
                <div>
                    <button
                        className="add-task"
                        onClick={() => setAddTask(true)}>
                        <i className='bx bx-plus'></i>
                        Add Task
                    </button>
                </div>
                <ModalSigIn signIn={props.signIn} setSignIn={props.setSignIn} />
                <ModalAddTask addTask={addTask} setAddTask={setAddTask} />
            </div>
        </main>
    )
}

export default Nav;
