import React from "react";
import "./Header.css";


function Header() {
  return (
    
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth ">
        <img src="./logo.png" alt="logo"  width={100}/>

        <div className="h-menu">
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Banner</a>
          <a href="">Contact</a>
          <a href="">Get started</a>
        </div>
      </div>
    </section>
  );
}

export default Header;
