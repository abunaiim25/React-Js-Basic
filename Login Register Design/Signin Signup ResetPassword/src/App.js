import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthMaster from './components/frontend/Auth/AuthMaster';
import ForgetPassword from './components/frontend/Auth/ForgetPassword';

function App() {


  return (
    <>
      {/** Route */}
      <Router>
        <Switch>
        <Route exact path={"/"} component={AuthMaster} />
          <Route exact path={"/forget-password"} component={ForgetPassword} />

        </Switch>
      </Router>
    </>
  );
}


export default App;
