import { Header } from "./Header";
import { About } from "./About";
import { Alphabet } from "./Alphabet";
import { Reading } from "./Reading";
import { Phrasebook } from "./Phrasebook";
import { Addword} from './Addword'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/abc" component={Alphabet} />
          <Route path="/reading" component={Reading} />
          <Route path="/vocabulary" component={Phrasebook} />
          <Route path="/add" component={Addword} />
          <Redirect to="/about" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
