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
import { Footer } from "./Footer";

function App() {
  return (
    <Router>
      <Header />
      <main className="main">
        {console.log("рендер мэйна")}
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
      <Footer />
    </Router>
  );
}

export default App;
