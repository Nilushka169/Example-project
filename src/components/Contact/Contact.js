import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {

    return (
        <div className='contact_container'>
        <form id="Contact" className='contact_form'>
            <div className='test1'>
            <h1 >Contact <span>Here</span></h1>
            <input type="text" name="name" id="" placeholder='Enter Name' />
            <input type="email" name="email" id="" placeholder='example@email.com'/>
            <input type="phone" name="phone" id="" placeholder='+94'/>
            <textarea name='message' id='' cols={30} rows={10} placeholder='type here...'/>
            <button type="submit">send</button>
            </div>
        </form>
            <div style={{ position: "relative" }}>
                <motion.div
                    className="contact__image"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    //animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    <img src='./contact4.png' className='contact_img'/>
                </motion.div>
                </div>
        </div>
    )
}

export default Contact;