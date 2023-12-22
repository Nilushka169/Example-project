import React, { useState } from 'react';
import './About.css';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {motion} from 'framer-motion';

function About() {
  const [percentage] = useState(64);

  return (
    <>
      <div className="about__containerFirst">
            <section className="about__container">
              <div className="container">
                <div>
                  <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    //animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.3 }}
                  >
                    Advance Innovation For IT Solutions
                  </motion.h1>
                  <motion.p
                    className="text"
                    initial={{ opacity: 0, y: 100 }}
                    //animate={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3 }}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eos eligendi molestiae ex harum, sed animi at aliquam
                    quaerat odit repudiandae dicta veniam, beatae aliquid,
                    voluptatum nostrum saepe doloribus excepturi. Facere!
                  </motion.p>
                  <motion.div
                    className="about__buttons"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    //animate={{ opacity: 1 }}
                    transition={{ duration: 1.6 }}
                  >
                    <motion.button
                      className="btn btn-primary"
                      whileHover={{ scale: 1.05 }}
                    >
                      Get In Touch
                    </motion.button>

                    <a href="#services">
                      <span>Our Services</span>
                      <AiOutlineArrowDown />
                    </a>
                  </motion.div>
                </div>
                <div style={{ position: "relative" }}>
                  <motion.div
                    className="about__image"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    //animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1.3 }}
                  >
                    <img
                      src="https://st4.depositphotos.com/17586788/i/600/depositphotos_247586928-stock-photo-a-successful-business-girl-in.jpg"
                      alt="about"
                    />
                  </motion.div>
                  <motion.div
                    className="about__progress"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    //animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                  >
                    <div className="progress_bar">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                      />
                    </div>
                    <h4>
                      Business Growth
                      <br />
                      <small>Level is high</small>
                    </h4>
                  </motion.div>
                </div>
              </div>
            </section>
            </div>
          
    </>
  );
}

export default About;
