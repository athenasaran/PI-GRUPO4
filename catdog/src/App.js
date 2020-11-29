import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Contato from './pages/Contato/Contato';


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

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>



    </div>
  );
}

export default App;
