import './App.css';
import LoginForm from "./components/LoginForm";
import UserHomePage from "./components/UserHomePage";
import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [user, setUser] = useState({});

  function defineUser(userObj){
    setUser(userObj);
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" > <LoginForm getUser={defineUser}/> </Route>
          <Route path="/userhomepage"> <UserHomePage userInfo={user}/> </Route>
        </Switch>
      </Router>
    </div>
  );  
}  

export default App;
