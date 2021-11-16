import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Signin(props){
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const history = useHistory();

    function handleChange(event){
        const {name, value} = event.target;
        setUser((prevValue) => {
            return {
                ...prevValue,
                [name]: value   
            }
        })
    }

    function login(){
        axios.post("http://localhost:9002/login", user)
        .then(res => {console.log(res.data); if(res.data.message === "Login Successfull") {history.push("./userhomepage")} else alert(res.data.message)})
        
        
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
                    name="username"
                    value={user.username}
                    placeholder="User Name" 
                    onChange={handleChange}/>

                <input 
                    className="input" 
                    type="password"
                    name="password" 
                    value={user.password}
                    placeholder="Password" 
                    onChange={handleChange}/>
        
                <button onClick={login}>Sign In</button>
            </div>
            <div className="overlay">
                <h1>Hello, Friend!</h1>
			    <p>Enter your personal details and start journey with us</p>
				<button onClick={handleClick}>Register</button>
            </div>
        </div>
    );
}

export default Signin;