import React from 'react';
import { NavLink } from 'react-router-dom';

import '../index.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <NavLink to="/" className="home-button">
        Return to Home
      </NavLink>
    </div>
  );
}
