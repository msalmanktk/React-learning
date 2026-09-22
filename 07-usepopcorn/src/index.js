import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
import StarRating from "./StarRating";

function Test() {
  const [moviesRating, setMoviesRating] = useState(0);
  return (
    <div>
      {" "}
      <StarRating color="blue" maxRating={10} onSetRating={setMoviesRating} />
      <p>This movies was rated {moviesRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "bad", "okay", "good", "amazing"]}
      defultrating={3}
    />
    <StarRating maxRating={15} />
    <Test />
    <StarRating size={24} color="red" className="test" />
  </React.StrictMode>,
);
