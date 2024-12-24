import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Navbar from "./components/Navbar";
import ServiceSection from "./components/ServiceSection";
import './styles.css';
export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar when pressing escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSidebarOpen]);

  return (
    <div className="app">
      <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <button
            className="close-button"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <nav className="sidebar-nav">
            <a href="#">SERVICES</a>
            <a href="#">INDUSTRIES</a>
            <a href="#">ISSUES & RESOURCES</a>
            <a href="#">INSIGHTS</a>
            <a href="#">ABOUT</a>
            <a href="#">LOCATIONS</a>
            <a href="#">EVENTS</a>
            <a href="#">NEWS</a>
            <a href="#">CAREERS</a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main>
        <div className="hero">
          <div className="hero-overlay" />
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Services</h1>
              <p className="hero-text">
                At BDO, client service is paramount and key to our success
                in building strong, long-term client relationships
              </p>
            </div>
          </div>
        </div>
        
        <ServiceSection />
      </main>
    </div>
  );
}

