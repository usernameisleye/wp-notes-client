import { Link } from "react-router-dom";

const SignIn = () => {
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
                    <form action="">
                        <div className="email">
                            <label htmlFor="email">Email*</label>
                            <input 
                              id="email"
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
                            <button>Sign In</button>

                            <Link>Forgot password?</Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>
     );
}
 
export default SignIn;