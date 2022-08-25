// import { useEffect, useState } from "react";
// import Movie from "./components/Movie";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello2</h1>
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/movie2">
          <h1>Hello2</h1>
        </Route>
      </Switch>
    </Router>
  );
  //return null;
}

export default App;
