import logo from './logo.svg';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Admin/Dashboard';


function App() {
  return (
    <>
       <Router>
        <Switch>

          {/** Auth */}
          <Route exact path={"/"} component={Dashboard} />
       
        </Switch>
      </Router>
    </>
  );
}

export default App;
