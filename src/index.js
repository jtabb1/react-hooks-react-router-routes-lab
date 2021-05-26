import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

/*

touch src/data.js
touch src/index.js
mkdir src/components
touch src/components/Actors.js
touch src/components/App.js
touch src/components/Directors.js
touch src/components/Home.js
touch src/components/Movies.js
touch src/components/NavBar.js

*/