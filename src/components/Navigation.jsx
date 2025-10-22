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

  // Framer Motion variants 
  const mobileMenuVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const navItemVariants = {
    closed: {
      x: -50,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
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
        position: 'relative',
        zIndex: 'var(--mebs-z-modal) + 1' 
      }}>
        
        {/* Logo */}
        <Link 
          to="/" 
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            zIndex: 'var(--mebs-z-modal) + 2' 
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

        {/* Fixed Hamburger Button */}
        <motion.button
          onClick={toggleMobileMenu}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mebs-gray-50)',
            border: 'none',
            cursor: 'pointer',
            padding: 'var(--mebs-spacer-xs)',
            borderRadius: 'var(--mebs-border-radius)',
            transition: 'var(--mebs-transition-base)',
            width: '2.5rem',
            height: '2.5rem',
            gap: '4px',
            position: 'relative',
            zIndex: 'calc(var(--mebs-z-modal) + 3)'
          }}
          className="mobile-menu-btn"
          onMouseEnter={(e) => {
            e.target.style.background = 'var(--mebs-royal-gold)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'var(--mebs-gray-50)';
          }}
          animate={isMobileMenuOpen ? "open" : "closed"}
        >
          {/* Hamburger Line 1 - Top */}
          <motion.span
            style={{
              width: '20px',
              height: '2px',
              background: 'var(--mebs-black)',
              borderRadius: '2px',
              display: 'block'
            }}
            initial={false}
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          {/* Hamburger Line 2 - Middle */}
          <motion.span
            style={{
              width: '20px',
              height: '2px',
              background: 'var(--mebs-black)',
              borderRadius: '2px',
              display: 'block'
            }}
            initial={false}
            animate={{
              opacity: isMobileMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
          {/* Hamburger Line 3 - Bottom */}
          <motion.span
            style={{
              width: '20px',
              height: '2px',
              background: 'var(--mebs-black)',
              borderRadius: '2px',
              display: 'block'
            }}
            initial={false}
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
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
              zIndex: 'var(--mebs-z-modal)', 
              display: 'flex',
              flexDirection: 'column'
            }}
            className="mobile-nav-overlay"
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
              padding: 'var(--mebs-spacer-4xl) var(--mebs-spacer-md) var(--mebs-spacer-xl)',
              gap: 'var(--mebs-spacer-xs)',
              marginTop: 'var(--mebs-header-height)'
            }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  variants={navItemVariants}
                  custom={index}
                >
                  <Link
                    to={item.path}
                    onClick={closeMobileMenu}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--mebs-spacer-md)',
                      fontFamily: 'var(--mebs-font-family-body)',
                      fontSize: 'var(--mebs-font-size-lg)',
                      fontWeight: 'var(--mebs-font-weight-medium)',
                      color: location.pathname === item.path ? 'var(--mebs-royal-gold)' : 'var(--mebs-white)',
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      letterSpacing: 'var(--mebs-tracking-wide)',
                      padding: 'var(--mebs-spacer-md) var(--mebs-spacer-lg)',
                      borderRadius: 'var(--mebs-border-radius-lg)',
                      transition: 'var(--mebs-transition-base)',
                      borderLeft: location.pathname === item.path ? 'var(--mebs-border-gold-thick)' : 'none',
                      background: location.pathname === item.path ? 'var(--mebs-bg-highlight-gold)' : 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (location.pathname !== item.path) {
                        e.target.style.color = 'var(--mebs-royal-gold-light)';
                        e.target.style.background = 'var(--mebs-bg-highlight-gold)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (location.pathname !== item.path) {
                        e.target.style.color = 'var(--mebs-white)';
                        e.target.style.background = 'transparent';
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
                borderTop: 'var(--mebs-border-gold-thin)',
                padding: 'var(--mebs-spacer-xl) var(--mebs-spacer-md)',
                textAlign: 'center',
                background: 'var(--mebs-black-light)'
              }} 
              className="dev-sig-mobile"
              variants={navItemVariants}
            >
              <motion.a 
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
                whileHover={{
                  color: 'var(--mebs-royal-gold)',
                  scale: 1.05
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
              </motion.a>
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