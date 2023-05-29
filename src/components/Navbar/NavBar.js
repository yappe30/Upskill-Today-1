import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Upskill from "../../images/UpskillToday Logo-modified.jpg";
import "./navbar.css";

const NavBar = ({ toggle }) => {
  const [home, setHome] = useState("navbtn");
  const [about, setAbout] = useState("");
  const [careerPathway, setCareerPathway] = useState("");
  const [corporate, setCorporate] = useState("");
  const [contact, setContact] = useState("");
    useEffect(()=> {
      (window.location.pathname == "/Home")? setHome('navbtn') : setHome('');
      (window.location.pathname == "/About")? setAbout('navbtn') : setAbout('');
      (window.location.pathname == "/CareerPathway")? setCareerPathway('navbtn') : setCareerPathway('');
      (window.location.pathname == "/Corporate")? setCorporate('navbtn') : setCorporate('');
      (window.location.pathname == "/Contact")? setContact('navbtn') : setContact('');
    },[])
  console.log()

  const hanldeClick = (e) => {
    (e.target.id == "Home1")? setHome('navbtn') : setHome('');
    (e.target.id == "About1")? setAbout('navbtn') : setAbout('');
    (e.target.id == "CareerPathway1")? setCareerPathway('navbtn') : setCareerPathway('');
    (e.target.id == "Corporate1")? setCorporate('navbtn') : setCorporate('');
    (e.target.id == "Contact1")? setContact('navbtn') : setContact('');
  }
  return (
    <nav
      className="navbar"
      style={{ position: "fixed", backgroundColor: "white", zIndex: 100 }}
    >
      <Link className="link" to="/" >
        <img src={Upskill} alt="logo" className="navbar-logo" />
      </Link>
      <div>
        <i className="icon" onClick={toggle} style={{ fontSize: "2.0rem" }}>
          <FaBars />
        </i>
      </div>
      <div className="menu">
        <Link className={'link ' + home} id="Home1" onClick={hanldeClick} to="/Home">
          Home
        </Link>

        <Link className={'link ' + about} id="About1" onClick={hanldeClick} to="/About">
          About Us
        </Link>

        <Link className={'link ' + careerPathway} id="CareerPathway1" onClick={hanldeClick} to="/CareerPathway">
          Career Pathway
        </Link>

        <Link className={'link ' + corporate} id="Corporate1" onClick={hanldeClick} to="/Corporate">
          Corporate
        </Link>

        <Link className={'link ' + contact} id="Contact1" onClick={hanldeClick} to="/Contact">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
