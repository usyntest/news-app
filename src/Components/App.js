import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// COMPONENTS
// import Menu from "./Menu";
import Main from "./Main";
// MY_API_KEY = "d67e3f72f16b4d128eee209543355183"

// new email1 = gomiriv852@dedatre.com
// email1 API_KEY = "6705ce8cd4b54b628b152ddb87e51f4b"

function App() {
  return (
    <Router>
      <div
        className="app min-h-screen w-screen flex flex-col items-center"
        style={{ backgroundColor: "#e3e0cf" }}
      >
        {/* <Menu /> */}
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
