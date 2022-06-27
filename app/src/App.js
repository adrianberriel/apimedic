import './App.css';
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../src/components/Login";
import Symptoms from "./components/Symptoms";

function App() {
  return (
      <div>
        <div className="App">

        </div>
        <div className="container mt-3">
          <Switch>
            {/*<Route exact path={["/", "/home"]} component={Home} />*/}
            <Route exact path="/login" component={Login} />
            {/*<Route exact path="/register" component={Register} />*/}
            <Route exact path="/symptoms" component={Symptoms} />
            {/*<Route path="/user" component={BoardUser} />*/}
            {/*<Route path="/mod" component={BoardModerator} />*/}
            {/*<Route path="/admin" component={BoardAdmin} />*/}
          </Switch>
        </div>
      </div>
  );
}

export default App;
