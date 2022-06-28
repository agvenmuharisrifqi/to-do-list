import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { ModalSigIn } from "./ModalSignIn";

function Nav(props) {
    const [navbar, setNavbar] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    const [sigIn, setSignIn] = useState(false)

    const toggleNavbar = (e) => {
        let check = navbar ? false : true;
        setNavbar(check);
    }

    const activeIconNav = (e) => {
        let iconNav = e.target.querySelector(".nav-link i");
        iconNav.className = iconNav.className.replace(/bx-/, "bxs-");
    }

    const nonActiveIconNav = (e) => {
        let iconNav = e.target.querySelector(".nav-link i");
        iconNav.className = iconNav.className.replace(/bxs-/, "bx-");
    }

    const activeSearchBar = (e) => {
        e.preventDefault();
        setSearchBar(true);
        setNavbar(false);
    }

    return (
        <nav className="navbar">
            <div className="account flex gap-4 items-center">
                <img src="https://avatars.dicebear.com/api/adventurer/jhonot.svg?b=%23ff9e9e" alt="Your avatar"
                    height="50" width="50" className="rounded-full hidden xs:block" />
                <div>
                    <a href="/" className="font-bold text-lg hover:text-green-900"
                        title="Double Click To Edit Your Name">
                        {/* {name ? name : "Type your name"} */}
                    </a>
                    <p className="text-slate-500" title="Max 20 Characters">
                        {/* {status ? status : "Type your status"} */}
                    </p>
                    {/* Sedang di Jupiter 🟠 */}
                </div>
            </div>
            <div className="toggle-nav cursor-pointer lg:hidden">
                <i className='bx bx-menu text-4xl text-slate-600' onClick={(e) => toggleNavbar(e)}></i>
            </div>
            <ul className={navbar ? "hidden lg:flex cursor-pointer nav-wrapper active" : "hidden lg:flex cursor-pointer nav-wrapper"}>
                <li className="nav-item" onMouseOver={(e) => activeIconNav(e)} onMouseOut={(e) => nonActiveIconNav(e)}>
                    <a href="" className="nav-link">
                        <i className='bx bx-calendar-check text-stone-400 transition-all duration-200 mr-1'></i>
                        Today
                    </a>
                </li>
                <li className="nav-item" onMouseOver={(e) => activeIconNav(e)} onMouseOut={(e) => nonActiveIconNav(e)}>
                    <a href="" className="nav-link">
                        <i className='bx bx-edit text-cyan-400 transition-all duration-200 mr-1'></i>
                        All
                    </a>
                </li>
                <li className="nav-item" onMouseOver={(e) => activeIconNav(e)} onMouseOut={(e) => nonActiveIconNav(e)}>
                    <a href="" className="nav-link">
                        <i className='bx bx-star text-amber-400 transition-all duration-200 mr-1'></i>
                        Important
                    </a>
                </li>
                <li className="nav-item" onMouseOver={(e) => activeIconNav(e)} onMouseOut={(e) => nonActiveIconNav(e)}>
                    <a href="" className="nav-link">
                        <i className='bx bx-check-circle text-red-400 transition-all duration-200 mr-1'></i>
                        Completed
                    </a>
                </li>
                <li className="nav-item" onMouseOver={(e) => activeIconNav(e)} onMouseOut={(e) => nonActiveIconNav(e)}>
                    <a href="" className="nav-link" id="open-search" onClick={(e) => activeSearchBar(e)}>
                        <i className='bx bx-search text-fuchsia-400 transition-all duration-200 mr-1'></i>
                        Search
                    </a>
                </li>
            </ul>
            {/* Search Bar */}
            <SearchBar active={searchBar} onClick={setSearchBar} />
            {/* <ModalSigIn signin={sigIn} onClick={setSignIn} name={setName} status={setStatus} /> */}
        </nav>
    )
}

export default Nav;
