import { useState } from "react";
import PackingList from "./packingList";
import { Form } from "./Form";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);

  function deletelist() {
    const confirmed = window.confirm("Are you sure you want to delete it ?");
    if (confirmed) setItems([]);
  }
  function handleAdditems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAdditems} />
      <PackingList
        items={items}
        onDeleteitem={handleDeleteItem}
        onToggleitems={handleToggleItem}
        clearlist={deletelist}
      />
      <Stats item={items} />
    </div>
  );
}
function Logo() {
  return <h1>Far Away 🌴</h1>;
}
function Stats({ item }) {
  if (!item.length)
    return (
      <p className="stats">
        <em>Start adding some items to your list</em>
      </p>
    );
  const numItem = item.length;
  const numPacked = item.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You  got everything! Reay to go ✈️"
          : `You have ${numItem} items in your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
// REACT is all about immutabiity

// controlled elements :techniques =23 steps
// define piece of state [value,setvalue]=useState(')
//  use elememnt to take it :value={value}
// update state variable : onchange={e=>setvalue(e.target.value)}

//Difference between stats and props :IMPORTANT
// state : is internal data , data that is owned by component in which it is declared.state can be thought of as the components memory because it can hold data over time,so across multiple rerenders. Can be updated by the component itself . Updating state causes component to re render . Used to make component interactive .useRef dont rerender
// Props is external data , owned by parent component  ,props is like a function parameters. Read-only so they cant modified by the component that  is recieving them .
// REcieveing new props causes components to re-rener.Usualy when the parents stae has been updated.
// Used by parent  toconfigure child comonent('settings)

// fundamentals of state :
// state is most important concept in react therfore managing state is the most important aspect when it comes to thinking in REACT.

// 1. State kya hai? (What is State?)
// State React ka dynamic data hai jo time ke saath change ho sakta hai (jaise user input, API se data, ya click ka count).
// Simple Rule: Agar data change hone wala hai, toh useState use karo.
// Agar data kabhi change nahi hoga: Toh normal const variable use karo (Performance ke liye behtar hai).
// Example:
// State (useState): User ka username, form ka input, cart mein items. (Ye change hote hain).
// Const Variable: Website ka title, config settings, API URL. (Ye change nahi hote).

//State management (important) : deciding when to createe pieces of state, what types of state are necessary where to place each piece of state ,and how ata flows through the app.
// State Management ka matlab hai: Apne app ke data ko organize karna, control karna, aur components ke beech share karna.
// Simple words mein:
// State Management = Data ka rasta decide karna ke kaunsa data kahan rahega, kaun use kar sakta hai, aur kaise update hoga.

// Types of state :in React => Local vs  Global State
// Local State : state needed only by one or few d/f components  like child an sibling compoents .
// Ye wo state hai jo sirf ek component ya uske bache (children) ko chahiye.
// We simply create a piece of local state using the use State functin inside a certain component , and that piece of state is only accessible to that exact component and maybe to its child components if awe pass the stats using Props.in state management We should always start with  local state and only move to global state if truly needed.
// Global State : this is a state that many /f components in the app  might need access to therefore when we define state as being global, that piece of state will become accessible to every single component in the entire app and also calle shared state b/c it is shared with all components.

// When and where we need state ?
// Need to store data = will data change at some point if yes then use state else use regular const variable. should it re-rener component ? if no then useRef else Place a new piece of state in a component
//where to place each new piece of state ? if only use by the current component then leave it in component and done , if used by child component the pass to child using props  , if necessary for siblings or even for parent component to use the state ? then time to move that state to the first common parent component and in react this is called lifting state up (very important information ).
// Lifting State Up (Bht Important!)
// Ye wo pattern hai jab aapko do siblings (bhai-behen components) ko same data share karna ho.

// Problem: Parent ke paas state nahi hai, toh siblings aapas mein baat nahi kar sakte.
// Solution: State ko Parent mein le jao. Parent dono children ko props ke zariye data dega.

//=> Derived state: state that is computed from an existing piece of state or from props
// const [cart,setcart]=useState([
//   {name:'fdf',price:15.99},
//   {name:'dfdf',price:14}
// ]);
// const [numitems,setnumitems]=useState(2)
// const [totalprice,settotalprice]=useState(29.99)
// Three pieces of state even through numitems and total price depend on cart .
// need to keep them in sync (update together).
// 3  state updates will cause 3 re-reners.
// const numitems=cart.length;
// const totalprice=cart.reduce((acc,cur)=>acc+crr.price,0)
// just regular ariables , n0 useState
// cart state is the single source of truth for this related data. Works because re-renering comonent wil automatically re-calculate derived state.

// moving components into separate file : it is a good method . make seaparate files for each component . and select a component and right click then click on refactor (ctrl+shift+r)
