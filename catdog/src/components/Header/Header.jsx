import React from "react";
import "./Header.css";
import logo from "../../assets/img/catdog.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">

      <Link className="header-link" to="/">
        <img className="header-logo" src={logo} alt="catdog" />
      </Link>

      <nav className="nav-header">
        <ul>
          <li>
            <Link className="header-link" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/sobre">
              SOBRE
              </Link>
          </li>
          <li>
            <Link className="header-link" to="/contato">
              CONTATO
            </Link>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Header;