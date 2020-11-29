import React from "react";
import "./Header.css";
import logo from "../../assets/img/catdog.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">


      <img className="header-logo" src={logo} alt="catdog" />

      <nav className="nav-header">
        <ul>
          <li>
            <Link className="header-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/sobre">
              Sobre
              </Link>
          </li>
          <li>
            <Link className="header-link" to="/contato">
              Contato
            </Link>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Header;