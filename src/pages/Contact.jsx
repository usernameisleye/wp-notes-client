const Contact = () => {
    return ( 
        <div className="contact-div">
            <div className="contact">
                <div className="contact_top">
                    <h2>Contact</h2>

                    <form action="">
                        <div className="name">
                            <label htmlFor="name">Name*</label>
                            <input 
                              id="name"
                              type="text" 
                            />
                        </div>

                        <div className="email">
                            <label htmlFor="email">Email Address*</label>
                            <input 
                              id="email"
                              type="text" 
                            />
                        </div>

                        <div className="message">
                            <label htmlFor="message">Your message*</label>
                            <textarea 
                              id="message"
                            ></textarea>
                        </div>

                        <button>Send</button>
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