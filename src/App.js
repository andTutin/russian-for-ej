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
import { useDispatch, useSelector } from "react-redux";
import { loadingStart } from "./Store/actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadingStart());
  }, []);

  if (isLoading)
    return <div>{console.log("рендер излоадинга")}идет загрузка</div>;

  return (
    <Router>
      {console.log("рендер мэйна")}
      <Header />
      <main className="main">
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
