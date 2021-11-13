function Signup(props){

    function handleClick(){
        props.onClick((prev) => {
            return !prev;
        } )
    }
    
    return (
        <div className="container">
            <div className="signup-div">
                <h1>Create Account</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </div>
            <div className="overlay">
                <h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button onClick={handleClick}>Sign in</button>
            </div>
        </div>
    );
}

export default Signup;