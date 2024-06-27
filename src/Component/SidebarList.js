import SidebarListItem from "./SidebarListItem";
import { listItems } from "../Utils/data";
const SidebarList = () => {
  return (
    <div className="sidebar-container__list">
      <ul>
        {listItems.map((items, index) => {
          return (
            <SidebarListItem key={index} path={items.path} text={items.text} />
          );
        })}
      </ul>
    </div>
  );
};
export default SidebarList;
