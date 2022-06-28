import './App.css';
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../src/components/Login";
import Symptoms from "./components/Symptoms";
import Diagnosis from "./components/Diagnosis";

function App() {
  return (
      <Switch>
        <Route exact path={["/", "/login"]} component={Login} />
        <Route exact path="/symptoms" component={Symptoms} />
        <Route exact path="/diagnosis" component={Diagnosis} />
      </Switch>
  );
}

export default App;
