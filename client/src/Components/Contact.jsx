import React from "react";
const Contact =() =>{
    return(
        <div className="contact-page">
            <h1 className="contact">Contact me</h1>
             <form >
                <input type="text" className="contact-name" placeholder="name" />
                <input type="text" className="contact-msg" placeholder="message" />
                <button className="contact-btn">Summit</button>
             </form>
        </div>
    );
};

export default Contact;