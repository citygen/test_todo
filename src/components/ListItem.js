import React from "react";
function ListItem({ itemClick, type, item, id, isShow }) {
  const itemClass = type === "done" ? "checked" : "";
  const showClass = isShow ? "" : "item-hide";
  console.log(type);
  return (
    <li className={`${itemClass} ${showClass}`}>
      <div onClick={() => itemClick(id)}>{item}</div>
    </li>
  );
}

export default ListItem;
