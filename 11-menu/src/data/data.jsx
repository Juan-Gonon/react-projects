import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";

export const data = [
    {
        page : 'Home',
        to : '/',
        icon : <IoHomeOutline />
    },
    {
        page : 'Products',
        to : '/products',
        icon: <AiOutlineProduct />
    },
    {
        page : 'Reports',
        to : '/reports',
        icon: <TbReportSearch />
    },
]