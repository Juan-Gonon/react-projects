import { Link } from "react-router-dom"
import './ListItem.css'


// eslint-disable-next-line react/prop-types
export const ListItem = ({children, to, icon, page, click, subMenu, haveSubMenu, handleHaveSubMenu}) => {

    const handleClick = () =>{
        if(subMenu){
            handleHaveSubMenu()
        }else{
            click()
        }
        
    }

 

  return (
    <li onClick={handleClick} className={`${haveSubMenu ? 'active' : ''}`} >
        <Link to={to} className="nav__menu-link" >
            {
                icon
            }
                <span>{page}</span>
        </Link>
        {
            children
        }
    </li>
  )
}
