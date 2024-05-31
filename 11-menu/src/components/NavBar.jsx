import { useIsOpen } from "../hook/useIsOpen";
import { IoGridOutline, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { data } from "../data/data";
import './NavBar.css'
import { ListItem } from "./ListItem";
import { SubPage } from "./SubPage";
import { useState } from "react";

export const NavBar = () => {
    const {isOpen, handleClickOpen} = useIsOpen()
    const [haveSubMenu, setHaveSubMenu] = useState(false)

    const handleHaveSubMenu = ()=>{
        setHaveSubMenu(!haveSubMenu)
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
                <li onClick={handleClickOpen} className="item__close" >
                    <IoClose className="icon-close" />
                </li>
                {
                    data.map((item, index) => (
                         <ListItem  key={index} to={item.to} icon={item.icon} page={item.page} click={handleClickOpen} subMenu={item.subPage} haveSubMenu={haveSubMenu} handleHaveSubMenu={handleHaveSubMenu} >
                            {
                                item.subPage && 
                                    <SubPage subMenu={item.subPage}></SubPage>
                                
                            }
                        </ListItem>
                    ))  
                }

            </ul>
        </nav>
    </header>
  )
}
