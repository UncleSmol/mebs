import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp,
  Heart
} from 'lucide-react';
import MebsLogo from '../assets/mebs-logo.png';
import DevSig from '../assets/dev-doc-logo.svg';

const Footer = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/info', label: 'Company Info' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact Us' }
      ]
    },
    {
      title: 'Our Services',
      links: [
        { path: '/services#electrical', label: 'Electrical Engineering' },
        { path: '/services#construction', label: 'Construction Services' },
        { path: '/services#cleaning', label: 'Industrial Cleaning' },
        { path: '/services#plumbing', label: 'Plumbing Services' }
      ]
    },
    {
      title: 'Contact Info',
      links: [
        { icon: Phone, text: '073 872 8919' },
        { icon: Mail, text: 'nakedicollen@gmail.com' },
        { icon: MapPin, text: 'South Africa' },
        { icon: Clock, text: '24/7 Emergency Services' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: Instagram, url: '#', label: 'Instagram' }
  ];

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <footer style={{
      background: 'var(--mebs-gradient-dark-elegant)',
      color: 'var(--mebs-white)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Main Footer Content */}
      <div style={{
        padding: 'var(--mebs-spacer-5xl) var(--mebs-spacer-md) var(--mebs-spacer-3xl)',
        maxWidth: 'var(--mebs-container-xl)',
        margin: '0 auto'
      }}>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: 'clamp(var(--mebs-spacer-2xl), 4vw, var(--mebs-spacer-4xl))',
            marginBottom: 'var(--mebs-spacer-4xl)'
          }}
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp}>
            <Link to="/" style={{ display: 'block', marginBottom: 'var(--mebs-spacer-lg)' }}>
              <img 
                src={MebsLogo} 
                alt="MEBS Logo" 
                style={{
                  height: '4rem',
                  width: 'auto'
                }}
              />
            </Link>
            <p style={{
              marginBottom: 'var(--mebs-spacer-lg)',
              opacity: 0.9,
              lineHeight: 1.6,
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
            }}>
              Mandla Ebhubesi Business Solutions - Your trusted partner for comprehensive 
              engineering and industrial services across South Africa.
            </p>
            <div style={{
              display: 'flex',
              gap: 'var(--mebs-spacer-md)'
            }}>
              {socialLinks.map((social, index) => {
                const SocialIcon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '2.5rem',
                      height: '2.5rem',
                      background: 'var(--mebs-bg-highlight-gold)',
                      color: 'var(--mebs-royal-gold)',
                      borderRadius: 'var(--mebs-border-radius-full)',
                      textDecoration: 'none',
                      transition: 'var(--mebs-transition-base)'
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      background: 'var(--mebs-royal-gold)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SocialIcon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div key={section.title} variants={fadeInUp}>
              <h3 style={{
                marginBottom: 'var(--mebs-spacer-lg)',
                color: 'var(--mebs-royal-gold)',
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                fontWeight: 'var(--mebs-font-weight-semibold)'
              }}>
                {section.title}
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--mebs-spacer-sm)'
              }}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {'path' in link ? (
                      <Link
                        to={link.path}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--mebs-spacer-xs)',
                          color: location.pathname === link.path ? 'var(--mebs-royal-gold)' : 'var(--mebs-white)',
                          textDecoration: 'none',
                          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                          opacity: location.pathname === link.path ? 1 : 0.8,
                          transition: 'var(--mebs-transition-base)',
                          padding: 'var(--mebs-spacer-xs) 0'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = 'var(--mebs-royal-gold)';
                          e.target.style.opacity = '1';
                        }}
                        onMouseLeave={(e) => {
                          if (location.pathname !== link.path) {
                            e.target.style.color = 'var(--mebs-white)';
                            e.target.style.opacity = '0.8';
                          }
                        }}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--mebs-spacer-sm)',
                        color: 'var(--mebs-white)',
                        opacity: 0.8,
                        fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                        padding: 'var(--mebs-spacer-xs) 0'
                      }}>
                        <link.icon size={16} style={{ color: 'var(--mebs-royal-gold)' }} />
                        <span>{link.text}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Bar */}
        <motion.div
          variants={fadeInUp}
          style={{
            background: 'var(--mebs-bg-highlight-gold)',
            padding: 'var(--mebs-spacer-2xl)',
            borderRadius: 'var(--mebs-border-radius-xl)',
            textAlign: 'center',
            marginBottom: 'var(--mebs-spacer-4xl)'
          }}
        >
          <h3 style={{
            marginBottom: 'var(--mebs-spacer-md)',
            color: 'var(--mebs-black)',
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)'
          }}>
            Ready to Start Your Project?
          </h3>
          <p style={{
            marginBottom: 'var(--mebs-spacer-lg)',
            color: 'var(--mebs-gray-800)',
            opacity: 0.9,
            fontSize: 'clamp(1rem, 2vw, 1.125rem)'
          }}>
            Contact us today for a free consultation and quote.
          </p>
          <div style={{
            display: 'flex',
            gap: 'var(--mebs-spacer-md)',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <motion.a
              href="tel:0738728919"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--mebs-spacer-xs)',
                background: 'var(--mebs-black)',
                color: 'var(--mebs-white)',
                padding: 'var(--mebs-spacer-sm) var(--mebs-spacer-lg)',
                borderRadius: 'var(--mebs-border-radius-pill)',
                textDecoration: 'none',
                fontWeight: 'var(--mebs-font-weight-medium)',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                transition: 'var(--mebs-transition-base)'
              }}
              whileHover={{ 
                scale: 1.05,
                background: 'var(--mebs-gray-800)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={16} />
              Call Now
            </motion.a>
            <motion.a
              href="mailto:nakedicollen@gmail.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--mebs-spacer-xs)',
                background: 'transparent',
                color: 'var(--mebs-black)',
                padding: 'var(--mebs-spacer-sm) var(--mebs-spacer-lg)',
                borderRadius: 'var(--mebs-border-radius-pill)',
                textDecoration: 'none',
                fontWeight: 'var(--mebs-font-weight-medium)',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                border: '2px solid var(--mebs-black)',
                transition: 'var(--mebs-transition-base)'
              }}
              whileHover={{ 
                scale: 1.05,
                background: 'var(--mebs-black)',
                color: 'var(--mebs-white)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={16} />
              Email Us
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div style={{
        borderTop: 'var(--mebs-border-gold-thin)',
        padding: 'var(--mebs-spacer-xl) var(--mebs-spacer-md)',
        background: 'var(--mebs-black-light)'
      }}>
        <div style={{
          maxWidth: 'var(--mebs-container-xl)',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--mebs-spacer-md)',
          textAlign: 'center'
        }}>
          {/* Copyright and Developer Signature */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--mebs-spacer-md)',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <span style={{
              color: 'var(--mebs-gray-400)',
              fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)'
            }}>
              © {new Date().getFullYear()} Mandla Ebhubesi Business Solutions. All rights reserved.
            </span>
            
            <motion.a 
              href="https://unclesmol.github.io/dev-doc" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--mebs-spacer-xs)',
                textDecoration: 'none',
                color: 'var(--mebs-gray-400)',
                fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                transition: 'var(--mebs-transition-base)'
              }}
              whileHover={{
                color: 'var(--mebs-royal-gold)',
                scale: 1.05
              }}
            >
              <span>Developed by</span>
              <img 
                src={DevSig} 
                alt="Developer's Signature" 
                style={{
                  height: '1rem',
                  width: 'auto'
                }}
              />
            </motion.a>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '3rem',
              height: '3rem',
              background: 'var(--mebs-royal-gold)',
              color: 'var(--mebs-black)',
              border: 'none',
              borderRadius: 'var(--mebs-border-radius-full)',
              cursor: 'pointer',
              transition: 'var(--mebs-transition-base)',
              marginTop: 'var(--mebs-spacer-sm)'
            }}
            whileHover={{ 
              scale: 1.1,
              background: 'var(--mebs-royal-gold-light)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>

      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '100px',
        height: '100px',
        background: 'var(--mebs-royal-gold)',
        borderRadius: '50%',
        opacity: 0.1,
        filter: 'blur(20px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: '80px',
        height: '80px',
        background: 'var(--mebs-royal-gold-light)',
        borderRadius: '50%',
        opacity: 0.1,
        filter: 'blur(15px)'
      }} />
    </footer>
  );
};

export default Footer;