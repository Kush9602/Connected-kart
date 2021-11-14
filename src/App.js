import { useState } from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import UserHomePage from "./components/UserHomePage";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">
      {isLoggedIn ? <UserHomePage /> : <LoginForm />}
    </div>
  );
}  

export default App;
