import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Text from "./Text";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Text text="Regular text" colorText="gray" />
    <Text
      text="Huger header"
      colorText="black"
      fontSizeText={30}
      fontWeightText="bold"
    />
    <Text text="Danger notification" flexText="flex" colorText="red" />
    <Text text="Underlined text" colorText="black" underline />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
