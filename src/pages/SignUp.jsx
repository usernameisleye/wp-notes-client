import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const SignUp = () => {
    const { avatarSrc, setAvatarSrc } = useGlobalContext();

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
                            type="text" 
                            />
                        </div>

                        <div className="username">
                            <label htmlFor="username">Username*</label>
                            <input 
                            id="username"
                            type="text" 
                            />
                        </div>

                        <div className="password">
                            <label htmlFor="password">Password*</label>
                            <input 
                            id="password"
                            type="text" 
                            />
                        </div>

                        <div className="action">
                            <button>Sign Up</button>

                            <p>By creating an account, you agree to the <Link>Terms of Use</Link> and <Link>Privacy Policy</Link>.</p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
     );
}
 
export default SignUp;