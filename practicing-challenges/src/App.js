import { useState } from "react";
import "./index.css";
export default function App() {
  return <Counter />;
}
function Counter() {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(0);
  const [range, setRange] = useState(1);
  // const dayName = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const date = new Date();
  date.setDate(date.getDate() + step);
  // const hour = day.gethours();
  function stepCounter() {
    setStep((step) => step + range);
  }
  function stepCounterminus() {
    setStep((step) => step - range);
  }
  function countCounter() {
    setCount((count) => count + 1);
  }
  function hhhh() {
    setCount((count) => count - 1);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div className="buttons">
        <input
          type="range"
          min={0}
          max={10}
          value={range}
          onChange={(e) => setRange(+e.target.value)}
        />
        {range}
        {/* <button onClick={hhhh} className="btn">
          -
        </button>
        <span>Step: {count}</span>
        <button onClick={countCounter} className="btn">
          +
        </button> */}
      </div>
      <div className="buttons">
        <button onClick={stepCounterminus} className="btn">
          -
        </button>
        <span>
          <input
            type="text"
            placeholder={step}
            value={step}
            onChange={(e) => {
              setStep(+e.target.value);
            }}
          />
        </span>
        <button onClick={stepCounter} className="btn">
          +
        </button>
      </div>
      <p>{`${step === 0 ? `Today is` : `${step > 0 ? `${step} days from today is ` : `${step} days ago was `}`} : ${date.toDateString()}`}</p>
      {step > 0 || range > 1 ? (
        <button
          type="reset"
          onClick={() => {
            setStep(0);
            setRange(1);
          }}
        >
          Reset
        </button>
      ) : null}
    </div>
  );
  // ${step > 0 ? `${step} days from today is` : `${step} days ago was
}
// simple below
// import { useState } from "react";
// import "./index.css";
// export default function App() {
//   return <Counter />;
// }
// function Counter() {
//   const [count, setCount] = useState(1);
//   const [step, setStep] = useState(0);
//   // const dayName = new Date().toLocaleDateString("en-US", { weekday: "long" });
//   const date = new Date();
//   date.setDate(date.getDate() + step);
//   // const hour = day.gethours();
//   function stepCounter() {
//     setStep((step) => step + count);
//   }
//   function stepCounterminus() {
//     setStep((step) => step - count);
//   }
//   function countCounter() {
//     setCount((count) => count + 1);
//   }
//   function hhhh() {
//     setCount((count) => count - 1);
//   }

//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "column",
//       }}
//     >
//       <div className="buttons">
//         <button onClick={hhhh} className="btn">
//           -
//         </button>
//         <span>Step: {count}</span>
//         <button onClick={countCounter} className="btn">
//           +
//         </button>
//       </div>
//       <div className="buttons">
//         <button onClick={stepCounterminus} className="btn">
//           -
//         </button>
//         <span>Step: {step}</span>
//         <button onClick={stepCounter} className="btn">
//           +
//         </button>
//       </div>
//       <p>{`${step === 0 ? `Today is` : `${step > 0 ? `${step} days from today is` : `${step} days ago was`}`} : ${date.toDateString()} =>`}</p>
//     </div>
//   );
//   // ${step > 0 ? `${step} days from today is` : `${step} days ago was
// }
