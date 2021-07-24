import React, { useState, useEffect } from 'react'
import './Nav.css'

const Nav = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setShow(true);
            } else setShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <>
            <div className={`nav ${show && "nav_dark"}`}>
                <img
                  className="nav_logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
                  alt="Netflix Logo"
                />
                
                {/* <img
                  className="nav_avatar"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png"
                  alt="Netflix Logo"
                /> */}
            </div>
        </>
    )
}

export default Nav;