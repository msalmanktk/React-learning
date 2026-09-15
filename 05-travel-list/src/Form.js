import { useState } from "react";

export function Form({ onAddItems }) {
  const count = [];
  for (let i = 0; i < 20; i++) {
    count.push(<option value={i + 1}>{i + 1}</option>);
  }
  // controlled elements
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  // const [items, setItems] = useState([]);//we move it from here to parent which is up lifting
  // function handleAdditems(item) {
  //   setItems((items) => [...items, item]);
  // }
  //also move it to app
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return; // if no description than nothing add
    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);
    // console.log(items);
    // initialItems.push(newItem);
    // console.log(initialItems);
    setDescription(""); //input values will be cleared
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip</h3>
      {/* <select>{count}</select> */}
      <select
        value={quantity}
        onChange={(e) => {
          // console.log(+e.target.value, typeof +e.target.value);
          setQuantity(Number(e.target.value));
          // setQuantity(+e.target.value);//same it convert it to number
        }}
      >
        {Array.from({ length: 20 }, (_, i) => {
          const value = i + 1;
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
