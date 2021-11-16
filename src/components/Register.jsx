import { useState } from "react";
import axios from "axios";

function Register(props){
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    function handleChange(event){
        const {name, value} = event.target;
        setUser((prevValue) => {
            return {
                ...prevValue,
                [name]: value   
            }
        })
    }

    function register(){
        const {name, email, password, confirmPassword} = user;
        if(name && email && password && (password === confirmPassword)){
            axios.post("http://localhost:9002/register", user)
            .then(res => alert(res.data.message));
            handleClick();
        } else 
            alert("Invalid Input")
        
    }

    function handleClick(){
        props.onClick((prev) => {
            return !prev;
        } )
    }
    
    return (
        <div className="container">
            <div className="signup-div">
                <h1>Create Account</h1>
                <input type="text" placeholder="Name" name="name" value={user.name} onChange={handleChange} />
                <input type="email" placeholder="Email" name="email" value={user.email} onChange={handleChange}/>
                <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
                <input type="password" placeholder="Confirm Password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange}/>
                <button onClick={register}>Register</button>
            </div>
            <div className="overlay">
                <h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button onClick={handleClick}>Sign in</button>
            </div>
        </div>
    );
}

export default Register;