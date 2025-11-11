import { Link, NavLink } from "react-router-dom";

export const SideBar = () => {
  const getStyles = ({ isActive }) => {
    return isActive
      ? "bg-yellow-600 rounded-tr-full rounded-br-full text-white flex gap-1 p-2"
      : "hover:bg-yellow-500 hover:text-white rounded-tr-full rounded-br-full flex gap-1 p-2 ";
  };

  return (
    <aside className="flex flex-col w-[180px] gap-3 border-r-2 border-yellow-300 w-[150px] ml-4 p-4 h-screen">
      <NavLink className={getStyles} to="/">
        <span class="material-symbols-outlined">home</span>Home
      </NavLink>
      <NavLink className={getStyles} to="/archive">
        <span className="material-symbols-outlined">all_inbox</span>Archive
      </NavLink>
      <NavLink className={getStyles} to="/important">
        <span class="material-symbols-outlined">label_important</span>Important
      </NavLink>
      <NavLink className={getStyles} to="/bin">
        <span class="material-symbols-outlined">delete</span>Bin
      </NavLink>
    </aside>
  );
};
