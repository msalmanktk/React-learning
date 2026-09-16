import { useState } from "react";

export default function Apptip() {
  const [bill, setBill] = useState(0);
  const [set, setQuantity] = useState("");
  const [set2, setQuantity2] = useState("");
  const tip = (bill * (set + set2)) / 2 / 100;

  function handleReset() {
    setBill(0);
    setQuantity("");
    setQuantity2("");
  }
  return (
    <>
      <BillInput bill={bill} setBill={setBill} />
      <Servicetip quantity={set} setQuantity={setQuantity} children>
        How do you like the service ?
      </Servicetip>
      <Servicetip quantity={set2} setQuantity={setQuantity2} children>
        How do your friend like the service ?
      </Servicetip>
      {bill > 0 && (
        <>
          Total Bill {set || set2 ? bill + tip : bill} : ({bill} + {tip})
          <div>
            <Reset onclickreset={handleReset} />
          </div>
        </>
      )}
    </>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div>
      <p>
        How much was the bill ?{" "}
        <span>
          <input
            type="text"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          />
          {/* <input type="text" onChange={setBill((e) => e.target.value)} /> */}
        </span>
      </p>
    </div>
  );
}
function Servicetip({ quantity, setQuantity, children }) {
  //   console.log(quantity);
  return (
    <div>
      {children}
      <span>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>it was okay (5%)</option>
          <option value={10}>it was good (10%)</option>
          <option value={20}>Absolutely amazing (20%)</option>
        </select>
      </span>
    </div>
  );
}

function Reset({ onclickreset }) {
  return <button onClick={onclickreset}>Reset</button>;
}
