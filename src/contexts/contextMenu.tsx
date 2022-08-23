import { createContext, ReactNode, useContext, useState } from "react";

export const createContextMenu=createContext<{ showMenu: unknown; setShowMenu:unknown}>({setShowMenu:"", showMenu:""})

    export const contextMenuProvider=({element}:{element :ReactNode})=>{
    const [showMenu, setShowMenu]=useState(false)
    return (
        <createContextMenu.Provider value={{showMenu, setShowMenu}}>
            {element}
        </createContextMenu.Provider>
    )
}
export const useContextMenu=()=>{
    const contexto=useContext(createContextMenu)
    return contexto
}