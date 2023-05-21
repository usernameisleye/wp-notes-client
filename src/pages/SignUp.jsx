import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

import { FiEyeOff, FiEye } from "react-icons/fi"
import { useAuthContext } from "../context/AuthContext";

const SignUp = () => {
    const { avatarSrc, setAvatarSrc } = useGlobalContext();
    const { setUser } = useAuthContext();

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Utils
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Sign up
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const body = {avatar: avatarSrc, email, username, password};
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
            credentials: "include"
        }

        try{
            const res = await fetch("http://localhost:2004/api/user/signup", options);
            const json = await res.json();

            if(res.ok){
                setLoading(false);
                setAvatarSrc("");
                setEmail("");
                setUsername("");
                setPassword("");
                navigate("/");

                localStorage.setItem("user", JSON.stringify(json));
                setUser(json);
            }
            if(!res.ok){
                throw Error(json.error)
            }
        }
        catch(error){
            setError(error.message);
            setLoading(false);
        }
    };

    return ( 
        <div className="SignUp">
            <section className="main">
                <div className="main_top">
                    <h2>Register an Account</h2>
                    <p>Welcome to the WP Notes.</p>

                    <div className="signup">
                        <span>Already have an account? </span>
                        <Link to="/signin">Sign in</Link>
                    </div>
                </div>

                <div className="main_bottom">
                    {error && <p className="error">{error}</p>}

                    <form action="">
                        <div className="avatar">
                            <div className="avatar_main">
                                {/* Avatar image */}
                                <img src={avatarSrc ? avatarSrc : "./images/user-img.png"} className="avatar-img" alt="Default user image" />

                                {/* Close img */}
                                { avatarSrc ? <img src="/images/close-white.png" className="clear-avatar" alt="" onClick={() => setAvatarSrc(null)} /> : null }
                            </div>

                            <Link to="/avatar">
                                <button>Create avatar</button>
                            </Link>

                        </div>

                        <div className="email">
                            <label htmlFor="email">Email*</label>
                            <input 
                            id="email"
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="username">
                            <label htmlFor="username">Username*</label>
                            <input 
                            id="username"
                            type="text" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="password">
                            <label htmlFor="password">Password*</label>
                            <input 
                            id="password"
                            value={password}
                            type={showPassword ? "text" : "password"}
                            onChange={(e) => setPassword(e.target.value)}
                            />

                            {/* Show or hide password */}
                            <div className="password_alter" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FiEye /> : <FiEyeOff />}
                            </div>
                        </div>

                        <div className="action">
                            <button onClick={handleSubmit}>{loading ? "Signing Up..." : "Sign Up"}</button>

                            <p>By creating an account, you agree to the <Link>Terms of Use</Link> and <Link>Privacy Policy</Link>.</p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
     );
}
 
export default SignUp;