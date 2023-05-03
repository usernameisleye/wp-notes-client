import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const SignUp = () => {
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
                            <img src="./images/user-img.png" alt="Default user image" />

                            <Link to="/signup/avatar">
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

            <Footer />
        </div>
     );
}
 
export default SignUp;