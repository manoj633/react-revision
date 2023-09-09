import React from "react";

function ListsAndKeys() {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  const itemList = items.map((item) => <li key={item.id}>{item.name}</li>);

  // Render the list
  return <ul>{itemList}</ul>;
}

export default ListsAndKeys;
