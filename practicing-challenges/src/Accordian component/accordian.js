import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lore ipsum dolor from tehsil colony",
  },
  {
    title: "How long i have to return my chair?",
    text: "tou have two days",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "exactly i used to be there always",
  },
];
export default function AppAccordian() {
  return <Accordian />;
}
function Accordian() {
  return (
    <div style={{ marginTop: "100px" }}>
      {faqs.map((element, index) => {
        const title = element.title;
        const text = element.text;
        // const { title, text } = element; //simple destructuring method
        return <Items title={title} text={text} key={index} num={index + 1} />;
      })}
    </div>
  );
}
function Items({ title, num, text }) {
  const [isopen, setisopen] = useState(false);
  function handleclick() {
    // if (isopen) {
    //   setisopen(false);
    // }
    // if (!isopen) {
    //   setisopen(true);
    // }
    setisopen((isopens) => !isopens);
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          border: "1px solid red",
          width: "50%",
          padding: "20px",
          textAlign: "center",
          margin: "10px",

          //   justifyContent: "center",
        }}
      >
        <div
          onClick={handleclick}
          style={{ display: "flex", justifyContent: "center", gap: "30px" }}
        >
          <span>{num < 10 ? `0${num}` : num} </span>
          <span> {title}</span>
          <span style={{ cursor: "pointer" }}> {isopen ? "-" : "+"}</span>
        </div>

        {isopen && (
          <div
            style={{
              background: "blue",
              padding: "15px",
              color: "white",
              marginTop: "10px",
            }}
          >
            {text}{" "}
          </div>
        )}
      </div>
    </div>
  );
}
