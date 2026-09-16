// import "./styles.css";
import "./index.css";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1); //use state is a hook , all te react fn that start with use is called hook
  // let [step, setStep] = useState(1); //use state is a hook , all te react fn that start with use is called hook
  // DONT set state manually
  const [isOpen, setIsOpen] = useState(true);
  function handleprevious() {
    if (step > 1) setStep((x) => x - 1);
    // step=step+1 //nothing works have and give no error react doesnot support this
  }
  function handleNext() {
    // if (step < 3) setStep(step + 1);
    if (step < 3) {
      setStep((x) => x + 1); //call back fn is a better way
      // setStep((x) => x + 1);
    }
  }
  function openClose() {
    setIsOpen((is) => !is);
  }
  return (
    <>
      {!isOpen && (
        <button
          style={{ textDecoration: "underline", fontSize: "18px" }}
          className="close"
          onClick={openClose}
        >
          Click to see
        </button>
      )}
      {isOpen && (
        <>
          <button className="close" onClick={openClose}>
            &times;
          </button>
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <p className="message">
              Step {step}: {messages[step - 1]}
            </p>
            <div className="buttons">
              {/* <button
                style={{ backgroundColor: "#7950f2" }}
                onClick={() => handleprevious()}
              >
                Previous
              </button> */}
              <Button
                style="#7950f2"
                handleitem={handleprevious}
                color="white"
                children
              >
                <span>👈</span>Previous
              </Button>
              <Button
                style="#7950f2"
                handleitem={handleNext}
                color="white"
                children
              >
                Next<span> 👉</span>
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
function Button({ style, handleitem, color, children }) {
  return (
    <button style={{ background: style, color: color }} onClick={handleitem}>
      {children}
    </button>
  );
}

// state : state is the most important concept in react.
//state is basically a data that a component can hold over time , necesory for information that it needs to remember throughout the app`s lifecycles
//state is like components memory
// eg , notification count,text content or active tab in a tab component etc
// "state variable"/"piece of state ": a single variable in a comonent (component state).
// when one single component is rendered , we call it view , so all the views combine and makeup the final UI
// 1: state allows us to update the components view by rerendering the component. so i tgive us a way to change the part of UI
//2: state allows developerss to persist local variables between multiple renders and rerenders.state is a most powerful tool in the world of react

// The mechanism of state in React : in react we dont manipulate dom directly when we want to updte a components view ,so react is declarative not imperative,
//React re-renders the component by running its function again, then updates the necessary DOM changes.". React calls the component again and again.in simple view is updated by rerendering the component.
//how works => state is preserved throughout rerenders.when we click so state udated in component using set fn then react sees that state is change then it automitically  rerender the component which result the updated view of component , is simle a component is re rendered when its state is updated : so to update the view we update state
// {The Mechanism of State in React
// 1. React mein DOM ko directly manipulate nahi karte
// Normal JavaScript mein hum DOM ko directly change kar sakte hain:
// document.querySelector("h1").textContent = "Hello";
// Yani hum khud browser ko bol rahe hain:
// "Ye element dhoondo aur iska text change karo."Ye imperative approach hai — hum step-by-step batate hain how to do it.
// React mein hum normally DOM ko directly manipulate nahi karte.React mein hum kehte hain:"Agar state ye hai, to UI aisi honi chahiye."Ye declarative approach hai.

// 2. State kya karti hai?
// State component ka data hota hai jo time ke sath change ho sakta hai.Example:
// const [count, setCount] = useState(0);
// Yahan: count → current state value
// setCount → state ko update karne wala function
// 0 → initial value
// Agar button click par:
// setCount(count + 1); to state update ho jayegi.

// 3. State change hone par React kya karta hai?
// Ye sabse important point hai:
// User clicks button => setCount() called => State changes=> React schedules a re-render=>Component function runs again=>New JSX is produced=> React updates the necessary DOM=>Updated UI appears
// Simple words mein:
// State change → Re-render → Updated UI

// 4. "Re-rendering the entire component" ka kya matlab hai?

// Tumhari line: React updates a component view by rerendering the entire component.
// Isko thora carefully samjho.
// React component function ko dobara run karta hai:
// function Counter() {
//   const [count, setCount] = useState(0);
//   return <h1>{count}</h1>;}
// Agar:= setCount(1);
// call hua, React component ko dobara render karega.
// Conceptually:
// Counter() → count = 0
// phir state update:
// setCount(1)
// phir:
// Counter() → count = 1
// Ab JSX mein:
// <h1>1</h1>
// produce hoga.
// Important: Iska matlab ye nahi ke browser ka poora DOM literally destroy karke dobara banaya jata hai. React new result ko previous result se compare karke necessary DOM changes apply karta hai.
// }

// watch lecture 11
