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
  const hour = new Date.getHours();
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
