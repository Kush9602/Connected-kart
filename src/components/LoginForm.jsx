import { useState } from 'react';
import Signin from "./Signin";
import Register from "./Register";
import './css/LoginForm.css';


function LoginForm() {
    const [signup, setSignup] = useState(false);

    function handleClick(value){
        setSignup(value);
    }

    return(
        <div className="main-container">
            {signup ? <Register onClick={handleClick}/> :<Signin onClick={handleClick} />}
        </div>
    );
}

export default LoginForm;