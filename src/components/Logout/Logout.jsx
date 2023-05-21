import { useState } from "react";

const Logout = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);

    // Logout function
    const handleLogout = async () => {
        setLoading(true);

        const res = await fetch("http://localhost:2004/api/user/logout", {
            method: "POST"
        });
        if(res.ok){
            setOpen(false);
            setLoading(false);

            location.reload();
            localStorage.removeItem("user");
        }
    };

    return ( 
        <div className={`Logout ${open ? "see" : "un-see"}`}>
            <div className="overlay"></div>
            <h2>Log out</h2>
            <p>Are you sure you want to log out?</p>

            <div className="buttons">
                <button 
                  className="yes"
                  onClick={handleLogout}
                  >{ loading ? "Logging out" : "Log out" }</button>

                <button 
                  className="no" 
                  onClick={() => setOpen(false)}
                >Cancel</button>
            </div>
        </div>
     );
}
 
export default Logout;