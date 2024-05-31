import { IoGridOutline, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { data } from "../data/data";
import './NavBar.css'
import { useState } from "react";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClickOpen = ()=>{
        setIsOpen(!isOpen)
    }

  return (
    <header>

        <div className="navbar" onClick={handleClickOpen} >
            <Link>
            <IoGridOutline className="icon-open" />
            </Link>
        </div>
        <nav className={`nav__menu ${isOpen ? 'active' : ''}`}>
            <ul className="nav__menu-items">
                <li onClick={handleClickOpen} >
                    <IoClose className="icon-close" />
                </li>
                {
                    data.map((item, index) => (
                        <li key={index} onClick={handleClickOpen}  >
                            <Link to={item.to} className="nav__menu-link" >
                                {
                                    item.icon
                                }
                                <span>{item.page}</span>
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </nav>
    </header>
  )
}
