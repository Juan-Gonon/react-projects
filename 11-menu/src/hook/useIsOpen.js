import { useState } from "react"


export const useIsOpen = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClickOpen = ()=>{
        setIsOpen(!isOpen)
    }

  return {
    isOpen,
    handleClickOpen
  }
}
