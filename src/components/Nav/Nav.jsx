import React from "react";
import { Link } from "react-scroll";
import Logo from "./Logo.jsx";

const Nav = () => {
  return (
    <nav className="flex w-100 justify-between ">
      <Logo />
      <Link
        to="home"
        className="60"
        spy={true}
        smooth={true}
        offset={0}
        duration={1500}
      >
        Home
      </Link>

      <Link
        to="portfolios"
        className=""
        spy={true}
        smooth={true}
        offset={-60}
        duration={1500}
      >
        Portfolios
      </Link>

      <Link
        to="skills"
        className=""
        spy={true}
        smooth={true}
        offset={-60}
        duration={1500}
      >
        Education/Skills
      </Link>

      <Link
        to="contact"
        className=""
        spy={true}
        smooth={true}
        offset={-60}
        duration={1500}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
