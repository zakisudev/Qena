import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

export default function Header() {
  return (
    <div className="navbar">
      <header className="vis">
        <Link to="/" id="LOGO">
          QENA
        </Link>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler">
          <i className="fa-solid fa-bars"></i>
        </label>
      </header>
      <div className="menu">
        <ul className="menu-list">
          <li>
            <Link to="/patients">Candidates</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
