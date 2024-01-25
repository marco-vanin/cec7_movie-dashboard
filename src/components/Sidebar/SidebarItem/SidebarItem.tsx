import React from "react";
import SideBarItemType from "./type";

interface Props {
  item: SideBarItemType;
}

const SidebarItem = ({ item }: Props) => {
  return (
    <div className="flex gap-3">
      <div>{React.createElement(item.icon)}</div>
      <div>{item.label}</div>
    </div>
  );
};

export default SidebarItem;
