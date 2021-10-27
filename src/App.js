// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LeagueDetail from './components/LeagueDetail/LeagueDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/league/:id">
            <LeagueDetail></LeagueDetail>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path= "/*">

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
