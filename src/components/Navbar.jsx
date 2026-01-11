import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import logo from '../assets/logo.png';
import resume from '../assets/resume.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'home', path: '/' },
    { name: 'projects', path: '/projects' },
    { name: 'skills', path: '/skills' },
    { name: 'about-me', path: '/about' },
    { name: 'contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          {/* <img src={logo} alt="Ananthu Logo" className="logo-img" /> */}
          <span className="logo-text">#&lt;A_S /&gt;</span>
        </Link>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <span className="accent">#</span>{link.name}
            </Link>
          ))}
          {/* Resume Link - Specialized */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link resume-btn"
          >
            Resume
          </a>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <style>{`
        .navbar {
          padding: 1.5rem 0;
          background: var(--bg-color);
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 2px solid var(--border-color);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .logo-img {
            height: 40px; /* Slightly larger scale */
            width: auto;
        }
        .logo-text {
            font-family: 'Fira Code', monospace;
            font-weight: 700;
            font-size: 1.2rem;
            color: var(--text-white);
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-link {
          color: var(--gray);
          font-size: 1rem;
          transition: color 0.3s;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--text-white);
          font-weight: 500;
        }
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-white);
          font-size: 1.5rem;
        }
        
        .resume-btn {
            border: 1px solid var(--primary-color);
            padding: 5px 15px;
            color: var(--text-white) !important;
        }
        .resume-btn:hover {
            background-color: rgba(199, 120, 221, 0.1);
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }
          .nav-links {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: var(--bg-color);
            flex-direction: column;
            justify-content: center;
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
          }
          .nav-links.active {
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
