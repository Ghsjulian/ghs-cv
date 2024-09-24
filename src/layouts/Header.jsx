import React, { useRef, useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const [isOpen, setisOpen] = useState(false);
    const navRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const [path, setPath] = useState("");
    const openNav = () => {
        navRef.current.classList.toggle("mobile-menu");
        setisOpen(!isOpen);
    };
    const closeNav = () => {
        if (isOpen) {
            openNav();
        }
    };
    const goHome = () => {
        navigate("/");
    };
    const goContact = () => {
        navigate("/contact");
    };
    useEffect(() => {
        setPath(location.pathname);
    }, [location]);
    return (
        <header>
            <h3 onClick={goHome}>Ghs Julian</h3>
            <nav ref={navRef} className="nav">
                <ul>
                    <h3>Main Menu</h3>
                    <NavLink
                    className={path == "/" ? "active" : ""}
                    onClick={closeNav} to="/">
                        Home
                    </NavLink>
                    <NavLink 
                    className={path == "/about" ? "active" : ""}
                    onClick={closeNav} to="/about">
                        About
                    </NavLink>
                    <NavLink
                    className={path == "/contact" ? "active" : ""}
                    onClick={closeNav} to="/contact">
                        Contact
                    </NavLink>
                    <NavLink
                    className={path == "/my-gigs" ? "active" : ""}
                    onClick={closeNav} to="/my-gigs">
                        Active GIGS
                    </NavLink>
                    <NavLink 
                    className={path == "/skills" ? "active" : ""}
                    onClick={closeNav} to="/skills">
                        Skills
                    </NavLink>
                    <NavLink 
                    className={path == "/projects" ? "active" : ""}
                    onClick={closeNav} to="/projects">
                        Projects
                    </NavLink>
                    <button
                        onClick={() => {
                            goContact(), closeNav();
                        }}
                        className="call"
                    >
                        Hire Me
                    </button>
                </ul>
            </nav>
            <button onClick={goContact} className="call">
                Hire Me
            </button>
            <button onClick={openNav} className="nav-btn">
                <img
                    src={
                        isOpen ? "/icons/delete.png" : "/icons/burger_menu.png"
                    }
                />
            </button>
        </header>
    );
};

export default Header;
