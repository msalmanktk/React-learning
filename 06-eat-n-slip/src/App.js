import { useState } from "react";
// import { Formsplitbill } from "./Formsplitbill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [selectdisplay, setSelectdisplay] = useState(true);
  const [showaddfriend, setshowaddfriend] = useState(true);
  const [friends, setfriends] = useState(initialFriends);

  function addfriend(friend) {
    setfriends((friends) => [...friends, friend]);
  }
  function addclick() {
    setSelectdisplay(!selectdisplay);
  }
  function showaddf() {
    setshowaddfriend(!showaddfriend);
    // alert("hello");
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList addclick={addclick} friends={friends} />
        {showaddfriend && (
          <Form addfriend={addfriend} showaddform={setshowaddfriend} />
        )}
        <Button onclick={showaddf}>
          {showaddfriend ? `Close` : `Add friend`}
        </Button>
      </div>
      {selectdisplay && <Formsplitbill friend={friends} />}
    </div>
  );
}
function FriendList({ addclick, friends }) {
  return (
    <ul>
      {friends.map((item) => (
        <Friend addclick={addclick} friend={item} key={item.id} />
      ))}
    </ul>
  );
}
function Friend({ friend, addclick }) {
  return (
    <li className="li">
      <img src={friend.image} alt={friend.name} />
      <div>
        <h3>{friend.name}</h3>
        <span className="red">you owe me</span>
      </div>
      <Button onclick={addclick}>Select</Button>
    </li>
  );
}
export function Button({ children, onclick }) {
  return (
    <button
      onClick={onclick}
      // onClick={() => {
      //   onclick();
      // }}
      className="button"
    >
      {children}
    </button>
  );
}

function Form({ addfriend, showaddform }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?");

  function handlesubmit(e) {
    e.preventDefault();
    if (!name || !image) return alert("Enter friend name Please");

    const id = Date.now();
    const newfriend = {
      name: name,
      image: `${image}=${id}`,
      balance: 0,
      id: id,
    };
    addfriend(newfriend);
    setName("");
    setImage(`https://i.pravatar.cc/48?`);
    showaddform(false);
  }
  return (
    <form className="form-add-friend" onSubmit={handlesubmit}>
      <label>🫂FriendName</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🧲Image URL </label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
function Formsplitbill() {
  return (
    <form className="form-split-bill">
      <h2>split a bill with X</h2>
      <label>X Bill Value</label>
      <input type="text" />
      <label>Y Your Expense</label>
      <input type="text" />
      <label>Z Clark`s expense</label>
      <input type="text" />
      <Button>Split Bill</Button>
    </form>
  );
}
