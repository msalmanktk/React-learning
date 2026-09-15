import { useState } from "react";
// we needs add items in packing list to print it on UI so how we do it props cant work here . So we use lifting up state
export default function PackingList({
  items,
  onDeleteitem,
  onToggleitems,
  clearlist,
}) {
  const [sortby, setSortby] = useState("input");
  //derived state
  let sortedItems;
  if (sortby === "input") sortedItems = items;
  if (sortby === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteitem={onDeleteitem}
            onToggleitems={onToggleitems}
          />
        ))}
      </ul>
      <div className="actions">
        {/* we change it using derive state */}
        <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
          <option value="input">Sort by input order </option>
          <option value="description">Sort by description </option>
          <option value="packed">Sort by packed status </option>
        </select>
        {/* clearing whole list */}
        <button onClick={clearlist}>clear List</button>
      </div>
    </div>
  );
}

function Item({ item, onDeleteitem, onToggleitems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleitems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteitem(item.id)}>❌</button>
    </li>
  );
}
