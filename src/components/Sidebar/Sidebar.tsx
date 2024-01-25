import SidebarItem from "./SidebarItem/SidebarItem";
import itemsList from "./itemsList";

const Sidebar = () => {
  return (
    <div className="h-screen bg-cyan-400 w-1/6 flex flex-col gap-8 p-10">
      {itemsList.map((item) => (
        <SidebarItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
