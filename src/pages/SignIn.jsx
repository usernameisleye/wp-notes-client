import { Link } from "react-router-dom";
import { FiEyeOff, FiEye } from "react-icons/fi"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const SignIn = () => {
    const { setUser } = useAuthContext();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Utils
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    // Sign In
    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true);

        const body = { email, password };
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
            credentials: "include"
        }

        try{
            const res = await fetch("http://localhost:2004/api/user/login", options);
            const resData = await res.json();
            
            if(res.ok){
                setLoading(false);
                setEmail("");
                setPassword("");
                navigate("/");

                localStorage.setItem("user", JSON.stringify(resData));
                setUser(resData);
            }
            if(!res.ok){
                throw Error (resData.error);
            }
        }
        catch(error){
            setError(error.message);
            setLoading(false);
        }
    }

    return ( 
        <div className="SignIn">
            <section className="main">
                <div className="main_top">
                    <h2>Welcome back</h2>
                    <p>Enter your email and password to sign in to the website.</p>

                    <div className="signup">
                        <span>Not signed up yet? </span>
                        <Link to="/signup">Sign up</Link>
                    </div>
                </div>

                <div className="main_bottom">
                    {error && <p className="error">{error}</p>}

                    <form action="">
                        <div className="email">
                            <label htmlFor="email">Email*</label>
                            <input 
                              id="email"
                              type="text" 
                              onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="password">
                            <label htmlFor="password">Password*</label>
                            <input 
                              id="password"
                              type={showPassword ? "text" : "password"} 
                              onChange={(e) => setPassword(e.target.value)}
                            />

                            {/* Show or hide password */}
                            <div className="password_alter" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FiEye /> : <FiEyeOff />}
                            </div>
                        </div>

                        <div className="action">
                            <button onClick={handleSignIn}>{loading ? "Signing In..." : "Sign In"}</button>

                            <Link>Forgot password?</Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>
     );
}
 
export default SignIn;