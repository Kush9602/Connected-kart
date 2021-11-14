import { useState } from "react";

function Signin(props){
    const [input, setInput] = useState({
        username: '',
        password: '',
    });

    function handleUsernameChange(event){
        const name = event.target.value;
        setInput(prevValue => {
            return {
                ...prevValue,
                username: name,
            }
        })
    }

    function handlePasswordChange(event){
        const pass = event.target.value;
        setInput(prevValue => {
            return {
                ...prevValue,
                password: pass,
            }
        })
        
    }

    function verifyUser() {
        
    }

    function handleClick(){
        props.onClick((prev) => {
            return !prev;
        } )
    }

    return (
        <div className="container">
            <div className="signin-div">
                <h1>Sign in</h1>
    
                <input 
                    className="input" 
                    type="text" 
                    placeholder="User Name" 
                    onChange={handleUsernameChange}/>

                <input 
                    className="input" 
                    type="password" 
                    placeholder="Password" 
                    onChange={handlePasswordChange}/>
        
                <button onClick={verifyUser}>Sign In</button>
            </div>
            <div className="overlay">
                <h1>Hello, Friend!</h1>
			    <p>Enter your personal details and start journey with us</p>
				<button onClick={handleClick}>Sign Up</button>
            </div>
        </div>
    );
}

export default Signin;