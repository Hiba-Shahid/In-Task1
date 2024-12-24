import React from 'react';
import { Menu, Search } from 'lucide-react';

export function Navbar({ onOpenSidebar }) {
  return (
    <>
      <div className="top-nav">
        <div className="container">
          <div className="top-nav-links">
            <a href="#">Locations</a>
            <a href="#">Events</a>
            <a href="#">News</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
            <a href="#">Register</a>
            <a href="#">Login</a>
          </div>
        </div>
      </div>

      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            <div className="nav-left">
              <a href="/" className="logo">
                BDO
              </a>
              <div className="nav-links">
                <a href="#">SERVICES</a>
                <a href="#">INDUSTRIES</a>
                <a href="#">INSIGHTS</a>
                <a href="#">ABOUT</a>
              </div>
            </div>
            <div className="nav-right">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input"
                />
                <Search className="search-icon" size={20} />
              </div>
              <button
                className="menu-button"
                onClick={onOpenSidebar}
                aria-label="Open menu"
                
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;