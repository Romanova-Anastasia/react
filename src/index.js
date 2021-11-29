import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Text from "./Text";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Text text="Regular text" colorText="gray" cssClass="text" />
    <Text
      text="Huger header"
      colorText="black"
      fontSizeText={30}
      fontWeightText="bold"
      cssClass="text"
    />
    <Text text="Danger notification" colorText="red" cssClass="text" />
    <Text text="Underlined text" colorText="black" underline cssClass="text" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
