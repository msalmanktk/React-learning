import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  //     function Pizza() {
  //   return <h2>Pizza</h2>;
  // }// nesting components are not good practice . skip it
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//creating more components
function Header() {
  const style = { textTransform: "uppercase" };
  return (
    <header className="header">
      {/* <h1 style={{ ...style, color: "red", fontSize: "48px" }}> */}
      <h1>Fast React Pizza co </h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //   const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2> Our menu</h2>

      {/* conditional rendering  */}
      {/* we cant use if else because they cant produce value we only use things that produce value */}
      {/* {numPizzas > 0 && ( */}
      {numPizzas > 0 ? (
        // REACT FRAGEMENT
        <>
          <p>
            Authetic Italian cuisine, 6 creative dishes to choose from. All from
            our stone overn,all organic,all delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza
                objectdata={pizza}
                key={pizza.name}
                // name={pizza.name}//it will work direct like props.name
                // photoName={pizza.photoName}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We`re still working oon menu.Please comeback later:</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella,"
        photoName="pizzas/spinaci.jpg"
        price={10} //it is number now
      /> */}
    </main>
  );
}
// creating componennt
function Pizza({ objectdata }) {
  //SO HERE PROPS NOT USED BY DESTRUCTURING WE DIRECTLY USED OBJECT FATA FROM PARENt
  //conditional rendering 3 ways best is ternaries
  //   if (Props.Appobjectdata.soldOut) return null;
  //   if (objectdata.soldOut) return null;
  return (
    <li className={`pizza ${objectdata.soldOut && "sold-out"}`}>
      <img src={objectdata.photoName} alt={objectdata.name} />
      <div>
        <h3>{objectdata.name}</h3>
        <p>{objectdata.ingredients}</p>
        {/* {objectdata.soldOut ? (
          <span>SOLD OUT </span>
        ) : (
          <span>{objectdata.price}</span>
        )} */}
        <span>{objectdata.soldOut ? "SOLD OUT" : objectdata.price + 3}</span>
      </div>
    </li>
  );
}

// function Footer(){}//we can use arow functions
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  //   if (!isOpen) return <p>we are closed.</p>;//yeah this is working
  return (
    <footer className="footer">
      {/* {isOpen && ( */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <div className="order">
          <p>
            We`re opening at {openHour}:00.Happy to see you here after{openHour}
            :00
          </p>
        </div>
      )}
      {/* {new Date().toLocaleTimeString()} we`re currentlyy open */}
    </footer>
  );
  //   return React.createElement("footer", null, "we`re currentlyy open ");
};
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>We`re open until {closeHour}:00.Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, //strict mode finding bugs easily
); //rendering app in react

// -----------------------------------------------------------------------------------------------------------------------------------------------
// ctrl c can stop the running program and again start it with npm start

//   Components : React applicatons are entirely made out of components ,these are just js functions
// Building blocks of user interfaces in React.
// Piece of UI that has => its own data => has own JS logic and => has own appearance (how it ooks and works )
//  We build complex UI by building multiple components and combining them , Components can be reused nested inside each other and pass data between them.

//what is JSX : components =data ,logc ,apperance
// JSX is a declaratice syntax to describe what components look like and how they work ,Components must return a block of JSX . Extension of js that allows us to embed js,css and react components into html. Each JSX element is converted to a react.createelement function call . We could use React without JSX

// JSX is a declarative syntax => 1 :imperative:Manual DOM element selections and DOM traversing . Step by step DOM mutations until we reach the desire UI
// 2: Descibe what UI should like using JSX based on curren data . React is an abstraction away  from DOM we never touch the DOM . Instead we think of the UI as a reflection of the current data

// why react make html css ans js combine together ?
//React combines HTML, CSS, and JavaScript because it unites the layout, style, and logic of a single user interface element into one self-contained file.

// separation of concern :Yes, React absolutely has Separation of Concerns, but it separates your code by feature (components) rather than by technology (HTML/CSS/JS files).

// Props: is essentially how we pass data between copmonents and on particular from parent components to child compoents , we can imagune rop as being like a communication channel between a parent and a child component,
// used to pass data from arent component s to child componens , anytshing can be passed ads props single values, arrays,objects,function , even other comonents

// HOW JSX WORKS: JSx works essentially like html, but we can enter js mode b y using{} (for text or attributes).
// we can place js expreion inide {}, statements are not allowed (if/else,for etc).
// a piece of jsx produces js expression
// we can place other pieces of jsx inside {}, we can write jsx anywhere inside a coponent in if else , assign to variables ,pass ti into fns
// a piece  of jsx can only have one root element. if you need more use <React.Fragment>(or the short <>)
// Differences between jsx and html
// className instead of HTML class , every tag needs to be closed e.g <img /> ,< br/>, all event handlers and other properties need to be camelCased ,Css inline styles are written lie this :{{style}} these properties are also named camelCased,  and comments need to be in {}

// short circuiting && return 2nd value if first value is true i,e isOpen && 'yeah open' if isopen =true then it print yeah open
// short circuiting || if ist one is true then it print first one : if false then move to2nd one and print it

// Uing if else in component return(): ham if else ko return ke andar nahi lik sakthe ai ke bajaye hum ternary operators use krte hai return statement me :
// Asan lafzon me baat ye hai ke: if/else ek "Statement" hai (jo koi value nahi deta), jabkay Ternary Operator ek "Expression" hai (jo ek final value return karta hai).React ke return ke andar hum sirf wahi cheez likh sakte hain jo koi Value generate kare.

// React Fragments:React Fragments ek aisa feature hain jo aapko multiple JSX elements ko group karne ki ijazat deta hai bina kisi extra HTML element (jaise <div>) ko DOM me add kiye.Simple lafzon me kahein to, ye code ko wrapper to deta hai lekin browser ki HTML screen par koi naya tabahi ya fuzool <div> paida nahi karta.
// Humay Fragments ki zaroorat kyun parti hai?React ka ek sakt rule hai: Aapka component hamesha ek single parent element return karna chahiye. Agar aap ek se zyada sibling elements return karne ki koshish karenge, to React error de dega.
// USE :<></> or Full syntax (<React.Fragment>) tab zaroori ho jata hai jab aap .map() use karke koi list render kar rahe hon aur aapko loop ke elements ko ek unique key assign karni ho, lekin aap extra <div> bhi nahi chahte.

// RENDERING : Rendering ka matlab hai React Component ke code ko screen par actual HTML visual me convert karna.Jab aapka React component run hota hai, to wo JSX (HTML jaisa code) return karta hai. React is JSX ko process karta hai aur aapke browser ke screen par elements (text, buttons, divs) ko draw ya display karta hai. Is poore process ko Rendering kehte hain.

// promp:
// slightly add more study needed things if necessory and writing tune is good and remove comments etc so i can save it on file make it structure beutiful "
