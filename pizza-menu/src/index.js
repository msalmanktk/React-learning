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
      {/* <Button /> */}
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
  return (
    <main className="menu">
      <h2> Our menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10} //it is number now
      />
      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato,mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      ></Pizza>
    </main>
  );
}
// creating componennt
function Pizza(Props) {
  console.log(Props);
  return (
    <div className="pizza">
      <img src={Props.photoName} alt={Props.name} />
      <div>
        <h3>{Props.name}</h3>
        <p>{Props.ingredient}</p>
        <span>{Props.price + 3}</span>
      </div>
    </div>
  );
}

// function Footer(){}//we can use arow functions
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  //   if (hour >= openHour && hour <= closeHour) alert("we`re currently open");
  //   else alert("Sorry we`re closed");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} we`re currentlyy open
    </footer>
  );
  //   return React.createElement("footer", null, "we`re currentlyy open ");
};

function Button() {
  return <button>Click me</button>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, //strict mode finding bugs easily
); //rendering app in react

// ctrl c can stop the running program and again start it with npm start

//   Components : React applicatons are entirely mae out of components ,these are just js functions
// Building blocks of user interfaces in React. Piece of UI that has its
// own data logic and appearance (how it ooks and works ) We b uild complex
// UI by building multiple components and combining them , Components can
// be reused nested inside each other and pass data between them.

//what is JSX : components =data ,logc ,apperance
// JSX is a declaratice syntax to describe what components look like and how they work ,Components must return a block of JSX . Extension of js that allows us to embed js,css and react components into html. Each JSX element is converted to a react.createelement function call . We could use React without JSX

// JSX is a declarative syntax => 1 :imperative:Mnual DOM element selections and DOM traversing . Step by step DOM mutations until we reach the desire UI
// 2: Descibe what UI should like using JSX based on curren data . React is an abstraction away  from DOM we never touch the DOM . Instead we think of the UI as a reflection of the current data

// why react make html css ans js combine together ?
//React combines HTML, CSS, and JavaScript because it unites the layout, style, and logic of a single user interface element into one self-contained file.

// separation of concern :Yes, React absolutely has Separation of Concerns, but it separates your code by feature (components) rather than by technology (HTML/CSS/JS files).

// Props: is essentially how we pass data between copmonents and on particular from parent components to child compoents , we can imagune rop as being like a communication channel between a parent and a child component
