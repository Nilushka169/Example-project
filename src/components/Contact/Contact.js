import React from 'react';
import './Contact.css';

const Contact = () => {

    return (
        <form>
            <h1>Contact <span>Here</span></h1>
            <input type="text" name="name" id="" placeholder='Enter Name' />
            <input type="email" name="email" id="" placeholder='Enter email'/>
            <input type="phone" name="phone" id="" placeholder='+94'/>
            <textarea name='message' id='' cols={30} rows={10} placeholder='type here...'/>
            <button type="submit">send</button>
        </form>
    )
}

export default Contact;