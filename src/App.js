import { useState } from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import ProductList from "./components/CompanyProducts";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? <ProductList /> : <LoginForm />}
    </div>
  );
}

export default App;
