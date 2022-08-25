import {
  Component,
  createContext,
  ReactHTML,
  ReactNode,
  ReactPortal,
  useContext,
  useState,
} from "react";

export const CreateContextMenu = createContext<{
  showMenu: boolean;
  setShowMenu: boolean | any;
}>({
  showMenu: false,
  setShowMenu: false,
});
export const ContextMenuProvider = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <CreateContextMenu.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </CreateContextMenu.Provider>
  );
};
export const useContextMenu = () => {
  const contexto = useContext(CreateContextMenu);
  return contexto;
};
