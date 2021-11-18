import { useState } from 'react';
import Signin from "./Signin";
import Register from "./Register";
import './css/LoginForm.css';


function LoginForm(props) {
    const [signup, setSignup] = useState(false);

    function handleClick(value){
        setSignup(value);
    }

    return(
        <div className="main-container">
            {signup ? <Register onClick={handleClick}/> :<Signin onClick={handleClick} getuser={props.getUser}/>}
        </div>
    );
}

export default LoginForm;