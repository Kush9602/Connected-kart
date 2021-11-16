import { useState } from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import UserHomePage from "./components/UserHomePage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {

  const [user, setUser] = useState({});

  // This data will retrive from LoginForm and passed to UserHomePage
  const data =     {"_id":{"$oid":"60ab2bb05ee41f09b7f5fd3e"},
  "name":"Joe","username":"joe@connectedh.com",
  "password":"joe@123",
  "dob":"01-10-1980",
  "mobile":"7763664463",
  "cart":[{"_id":{"$oid":"60ab2de75ee41f09b7f5fd42"},
          "imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500\u0026fmt=jpeg\u0026qlt=80\u0026op_sharpen=0\u0026op_usm=1.0,1.0,5,0\u0026iccEmbed=0",
          "name":"CHECK PRINT SHIRT",
          "price":110.0},

          {"_id":{"$oid":"60ab2de75ee41f09b7f5fd43"},
          "imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700\u0026amp;fmt=jpeg\u0026amp;qlt=80\u0026amp;op_sharpen=0\u0026amp;op_usm=1.0,1.0,5,0\u0026amp;iccEmbed=0",
          "name":"GLORIA HIGH LOGO SNEAKER",
          "price":91.0} ] };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" > <LoginForm /> </Route>
          <Route path="/userhomepage"> <UserHomePage /> </Route>
        </Switch>
      </Router>
    </div>
  );  
}  

export default App;
