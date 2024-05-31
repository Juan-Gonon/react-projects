
import { useIsOpen } from "../hook/useIsOpen"
import { ListItem } from "./ListItem"
import "./SubPage.css"
// eslint-disable-next-line react/prop-types
export const SubPage = ({ subMenu }) => {
  const {handleClickOpen} = useIsOpen()

  return (
    <ul className="list__subPage" >
        {
            // eslint-disable-next-line react/prop-types
            subMenu.map((item, index) => (
                <ListItem key={index} icon={item.icon} to={item.to} page={item.page} click={handleClickOpen} subMenu={item.subPage} />
            ))
        }
    </ul>
  )
}
