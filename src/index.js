import React from "react";
import ReactDOM from "react-dom";
import "purecss";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Container />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./components/Header/Header", () => {
    const NextApp = require("./components/Header/Header").default;
    ReactDOM.render(<NextApp />, document.getElementById("root"));
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
