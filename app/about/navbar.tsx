"use client"

import {useState} from "react"
import Links from "./links"

function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="flex w-1/3 justify-end">
            <div className="w-full justify-between md:flex">
                <Links />
            </div>
            <div className="">
                <button onClick={toggleNavBar}>Button</button>
            </div>
        </nav>
    );
}

export default NavBar