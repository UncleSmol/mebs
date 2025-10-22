import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MebsLogo from '../assets/mebs-logo.png';
import DevSig from '../assets/dev-doc-logo.svg';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      path: '/',
      label: 'Home',
      icon: 'house-fill',
    },
    {
      path: '/services',
      label: 'Services',
      icon: 'tools',
    },
    {
      path: '/info',
      label: 'Info',
      icon: 'info-circle',
    },
    {
      path: '/projects',
      label: 'Projects',
      icon: 'briefcase',
    },
    {
      path: '/contact',
      label: 'Contact',
      icon: 'telephone',
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Simple slide animation for mobile menu
  const mobileMenuVariants = {
    closed: {
      x: '-100%',
      transition: {
        duration: 0.3
      }
    },
    open: {
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const navItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
    },
    open: {
      opacity: 1,
      x: 0,
    }
  };

  return (
    <header style={{
      background: 'var(--mebs-white-cream)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 'var(--mebs-z-sticky)',
      boxShadow: 'var(--mebs-shadow)'
    }}>
      {/* Main Navigation Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 'var(--mebs-header-height)',
        padding: 'var(--mebs-spacer-sm) var(--mebs-spacer-md)',
        maxWidth: 'var(--mebs-container-xl)',
        margin: '0 auto',
        position: 'relative'
      }}>
        
        {/* Logo */}
        <Link 
          to="/" 
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            zIndex: 1000
          }}
          onClick={closeMobileMenu}
        >
          <img 
            src={MebsLogo} 
            alt="MEBS Logo" 
            style={{
              height: '3rem',
              width: 'auto'
            }}
          />
        </Link>

        {/* Desktop Navigation - Hidden on Mobile */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: 'var(--mebs-spacer-xl)'
        }} className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                fontFamily: 'var(--mebs-font-family-body)',
                fontSize: 'var(--mebs-font-size-base)',
                fontWeight: 'var(--mebs-font-weight-medium)',
                color: location.pathname === item.path ? 'var(--mebs-royal-gold)' : 'var(--mebs-black)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: 'var(--mebs-tracking-wide)',
                transition: 'var(--mebs-transition-base)',
                padding: 'var(--mebs-spacer-xs) var(--mebs-spacer-sm)',
                borderRadius: 'var(--mebs-border-radius)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== item.path) {
                  e.target.style.color = 'var(--mebs-royal-gold-light)';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== item.path) {
                  e.target.style.color = 'var(--mebs-black)';
                }
              }}
            >
              {item.label}
              {location.pathname === item.path && (
                <div style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '20px',
                  height: '2px',
                  background: 'var(--mebs-royal-gold)',
                  borderRadius: 'var(--mebs-border-radius-full)'
                }} />
              )}
            </Link>
          ))}
        </nav>

        {/* Menu Toggle Button - Always visible in header */}
        <button
          onClick={toggleMobileMenu}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isMobileMenuOpen ? 'var(--mebs-royal-gold)' : 'var(--mebs-gray-50)',
            border: 'none',
            cursor: 'pointer',
            padding: 'var(--mebs-spacer-sm)',
            borderRadius: 'var(--mebs-border-radius)',
            transition: 'var(--mebs-transition-base)',
            width: '3rem',
            height: '3rem',
            position: 'relative',
            zIndex: 1001
          }}
          className="mobile-menu-btn"
          onMouseEnter={(e) => {
            e.target.style.background = 'var(--mebs-royal-gold)';
          }}
          onMouseLeave={(e) => {
            if (!isMobileMenuOpen) {
              e.target.style.background = 'var(--mebs-gray-50)';
            }
          }}
        >
          {/* Hamburger Icon (3 lines) when closed */}
          {!isMobileMenuOpen && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              width: '20px',
              height: '16px'
            }}>
              <div style={{
                width: '20px',
                height: '2px',
                background: 'var(--mebs-black)',
                borderRadius: '1px'
              }} />
              <div style={{
                width: '20px',
                height: '2px',
                background: 'var(--mebs-black)',
                borderRadius: '1px'
              }} />
              <div style={{
                width: '20px',
                height: '2px',
                background: 'var(--mebs-black)',
                borderRadius: '1px'
              }} />
            </div>
          )}
          
          {/* X Icon when open */}
          {isMobileMenuOpen && (
            <div style={{
              position: 'relative',
              width: '20px',
              height: '20px'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '20px',
                height: '2px',
                background: 'var(--mebs-black)',
                borderRadius: '1px',
                transform: 'translate(-50%, -50%) rotate(45deg)'
              }} />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '20px',
                height: '2px',
                background: 'var(--mebs-black)',
                borderRadius: '1px',
                transform: 'translate(-50%, -50%) rotate(-45deg)'
              }} />
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'var(--mebs-black)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              paddingTop: 'calc(var(--mebs-header-height) + var(--mebs-spacer-xl))'
            }}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Mobile Navigation Items */}
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              gap: 'var(--mebs-spacer-xs)',
              padding: '0 var(--mebs-spacer-md)'
            }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  variants={navItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={closeMobileMenu}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--mebs-spacer-md)',
                      fontFamily: 'var(--mebs-font-family-body)',
                      fontSize: 'var(--mebs-font-size-xl)',
                      fontWeight: 'var(--mebs-font-weight-medium)',
                      color: location.pathname === item.path ? 'var(--mebs-royal-gold)' : 'var(--mebs-white)',
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      letterSpacing: 'var(--mebs-tracking-wide)',
                      padding: 'var(--mebs-spacer-lg) var(--mebs-spacer-xl)',
                      borderRadius: 'var(--mebs-border-radius-lg)',
                      transition: 'var(--mebs-transition-base)',
                      borderLeft: location.pathname === item.path ? '4px solid var(--mebs-royal-gold)' : 'none',
                      background: location.pathname === item.path ? 'rgba(212, 175, 55, 0.1)' : 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (location.pathname !== item.path) {
                        e.target.style.background = 'rgba(212, 175, 55, 0.1)';
                        e.target.style.color = 'var(--mebs-royal-gold-light)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (location.pathname !== item.path) {
                        e.target.style.background = 'transparent';
                        e.target.style.color = 'var(--mebs-white)';
                      }
                    }}
                  >
                    <i 
                      className={`bi bi-${item.icon}`} 
                      style={{
                        fontSize: '1.5rem',
                        width: '1.5rem',
                        textAlign: 'center'
                      }}
                    />
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Developer Signature - Bottom of Mobile Menu */}
            <motion.div 
              style={{
                borderTop: '1px solid var(--mebs-royal-gold)',
                padding: 'var(--mebs-spacer-xl) var(--mebs-spacer-md)',
                textAlign: 'center',
                background: 'rgba(0, 0, 0, 0.3)',
                marginTop: 'auto'
              }}
              variants={navItemVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ delay: navItems.length * 0.1 }}
            >
              <a 
                href="https://unclesmol.github.io/dev-doc" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--mebs-spacer-sm)',
                  textDecoration: 'none',
                  color: 'var(--mebs-gray-400)',
                  fontSize: 'var(--mebs-font-size-base)',
                  transition: 'var(--mebs-transition-base)',
                  padding: 'var(--mebs-spacer-sm)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--mebs-royal-gold)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--mebs-gray-400)';
                }}
              >
                <span style={{
                  fontFamily: 'var(--mebs-font-family-body)',
                  fontWeight: 'var(--mebs-font-weight-medium)'
                }}>Developed by</span>
                <img 
                  src={DevSig} 
                  alt="Developer's Signature" 
                  style={{
                    height: '1.25rem',
                    width: 'auto'
                  }}
                />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Body scroll control */}
      <style>{`
        body {
          overflow: ${isMobileMenuOpen ? 'hidden' : 'auto'};
        }
        
        /* Desktop Styles */
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          
          .mobile-menu-btn {
            display: none !important;
          }
        }
        
        /* Mobile Styles */
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navigation;