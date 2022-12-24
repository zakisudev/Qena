import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <nav className="helpList">
        <Header />
      </nav>
      <main className="main">
        <Outlet />
      </main>
      <footer>
        <div className="footer">
          <div className="footer-content">
            <div className="footer-about">
              <h1 className="logo-text">
                <span>QENA</span>
              </h1>
              <p>
                QENA is a platform that helps you find the best candidates for
                your company
              </p>
            </div>
            <div className="footer-contact">
              <span>
                <i className="fa-solid fa-map-marker"></i> Addis Ababa, Ethiopia
              </span>
            </div>
            <div className="footer-socials">
              <a href="https://www.facebook.com/qena-lib">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/qena-lib">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://twitter.com/qena-lib">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/qena-lib">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
