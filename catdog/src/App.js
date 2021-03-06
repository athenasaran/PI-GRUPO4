import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";
import Cat from "./pages/Cat/Cat";
import Dog from "./pages/Dog/Dog";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/sobre">
            <Sobre />
          </Route>

          <Route path="/contato">
            <Contato />
          </Route>

          <Route path="/cat">
            <Cat />
          </Route>

          <Route path="/dog">
            <Dog />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
