import { useState, useEffect } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Utils
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleContact = async (e) => {
        e.preventDefault();
        setLoading(true);

        const body = { email, message};

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }

        try{
            if(!name || !email || !message){
                throw Error("All fields are required");
            }

            const res = await fetch("http://localhost:2004/api/blogs/mail", options);

            const resData = await res.json();

            if(res.ok){
                setName("");
                setEmail("");
                setMessage("");
                setLoading(false);
            }
        }
        catch(error){
            setLoading(false);
            setError(error.message);
        }
    };

    return ( 
        <div className="contact-div">
            <div className="contact">
                <div className="contact_top">
                    <h2>Contact</h2>

                    {/* Top error */}
                    { error &&  <div className="error">{error}</div>}
                    <form action="" onSubmit={handleContact}>

                        {/* Name field */}
                        <div className="name">
                            <label htmlFor="name">Name*</label>
                            <input 
                              id="name"
                              type="text" 
                              value={name}
                              onChange={e => setName(e.target.value)}
                              className={error && "error-field"}
                            />
                            {/* { error && <p className="error-msg">Required field</p> } */}
                        </div>

                        {/* Email field */}
                        <div className="email">
                            <label htmlFor="email">Email Address*</label>
                            <input 
                              id="email"
                              type="text" 
                              value={email}
                              onChange={e => setEmail(e.target.value)}  
                              className={error && "error-field"}
                            />
                            {/* { error && <p className="error-msg">Required field</p> } */}
                        </div>

                        {/* Message field*/}
                        <div className="message">
                            <label htmlFor="message">Your message*</label>
                            <textarea 
                              id="message"
                              value={message}
                              onChange={e => setMessage(e.target.value)}   
                              className={error && "error-field"}                     
                            ></textarea>
                            {/* { error && <p className="error-msg">Required field</p> } */}
                        </div>

                        <button>{ loading ? "Sending..." : "Send" }</button>
                    </form>
                </div>

                <div className="contact_bottom">
                    <div className="contact_bottom_top">
                        <h3>Project Inquiries</h3>
                        <p>adeleyeadesida@gmail.com</p>
                        <p>@usernameisleye</p>
                    </div>

                    <div className="contact_bottom_bottom">
                        <h3>Office</h3>
                        <p>Hmmm...🤔</p>
                        <p>Lagos, Nigeria</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;