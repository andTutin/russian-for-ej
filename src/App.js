import { Header } from "./Header";
import { About } from "./About";
import { Alphabet } from "./Alphabet";
import { Reading } from "./Reading";
import { Phrasebook } from "./Phrasebook";
import { Admin } from "./Admin";
import { Login } from "./Login";
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
          <Route path="/" exact component={About} />
          <Route path="/alphabet" component={Alphabet} />
          <Route path="/reading" component={Reading} />
          <Route path="/phrasebook" component={Phrasebook} />
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
