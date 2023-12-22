import React from "react";
import "./Header.css";
import {Link} from "react-scroll";


function Header() {
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="h-menu flexCenter">
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Banner</a>
          <a href="">Contact</a>
          <Link to="Banner" spy={true} smooth={true} offset={50} duration={700}>Banner</Link>
          <a href="">Get started</a>
        </div>
      </div>
    </section>
  );
}

export default Header;
