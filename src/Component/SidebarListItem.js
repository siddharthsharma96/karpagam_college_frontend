import { NavLink } from "react-router-dom";

const SidebarListItem = ({ path, text }) => {
  return (
    <li>
      <NavLink to={path}>{text}</NavLink>
    </li>
  );
};

export default SidebarListItem;
