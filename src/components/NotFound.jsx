import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CtaButton from '../common/ui/button'
import { 
  Home, 
  Navigation, 
  Info, 
  Mail, 
  AlertTriangle,
  Compass
} from 'lucide-react'

const NotFound = () => {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div style={{
      marginTop: 'var(--mebs-header-height)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--mebs-gradient-white-gold)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{
        maxWidth: 'var(--mebs-container-md)',
        margin: '0 auto',
        padding: 'var(--mebs-spacer-4xl) var(--mebs-spacer-md)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Warning Icon */}
          <motion.div 
            style={{
              marginBottom: 'var(--mebs-spacer-xl)',
              display: 'flex',
              justifyContent: 'center'
            }}
            variants={fadeInUp}
          >
            <div style={{
              background: 'var(--mebs-gradient-primary)',
              width: '120px',
              height: '120px',
              borderRadius: 'var(--mebs-border-radius-full)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              border: 'var(--mebs-border-gold-thick)',
              boxShadow: 'var(--mebs-shadow-gold-lg)'
            }}>
              <AlertTriangle size={48} style={{ color: 'var(--mebs-black)' }} />
            </div>
          </motion.div>

          {/* 404 Number */}
          <motion.div 
            className="text-display-hero text-gold text-glow-gold"
            style={{
              marginBottom: 'var(--mebs-spacer-lg)',
              lineHeight: 1,
              fontWeight: 'var(--mebs-font-weight-bold)'
            }}
            variants={fadeInUp}
          >
            404
          </motion.div>

          {/* Title */}
          <motion.h1 
            className="text-section-heading"
            style={{
              marginBottom: 'var(--mebs-spacer-md)',
              color: 'var(--mebs-black)'
            }}
            variants={fadeInUp}
          >
            Page Not Found
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-content-large"
            style={{
              marginBottom: 'var(--mebs-spacer-2xl)',
              color: 'var(--mebs-gray-600)',
              maxWidth: '500px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
            variants={fadeInUp}
          >
            Sorry, the page you are looking for doesn't exist or has been moved.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInUp}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <CtaButton size="lg" icon={Home}>
                Back to Homepage
              </CtaButton>
            </Link>
          </motion.div>

          {/* Additional Help */}
          <motion.div 
            className="text-content-small"
            style={{
              marginTop: 'var(--mebs-spacer-2xl)',
              color: 'var(--mebs-gray-500)'
            }}
            variants={fadeInUp}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--mebs-spacer-xs)',
              marginBottom: 'var(--mebs-spacer-sm)'
            }}>
              <Compass size={16} style={{ color: 'var(--mebs-royal-gold)' }} />
              <span>Or navigate to:</span>
            </div>
            <div style={{
              display: 'flex',
              gap: 'var(--mebs-spacer-md)',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link 
                to="/services" 
                className="text-content-small text-gold"
                style={{
                  textDecoration: 'none',
                  transition: 'var(--mebs-transition-base)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--mebs-spacer-xs)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--mebs-royal-gold-dark)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--mebs-royal-gold)';
                }}
              >
                <Navigation size={14} />
                Services
              </Link>
              <Link 
                to="/info" 
                className="text-content-small text-gold"
                style={{
                  textDecoration: 'none',
                  transition: 'var(--mebs-transition-base)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--mebs-spacer-xs)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--mebs-royal-gold-dark)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--mebs-royal-gold)';
                }}
              >
                <Info size={14} />
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-content-small text-gold"
                style={{
                  textDecoration: 'none',
                  transition: 'var(--mebs-transition-base)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--mebs-spacer-xs)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--mebs-royal-gold-dark)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--mebs-royal-gold)';
                }}
              >
                <Mail size={14} />
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: 'var(--mebs-spacer-lg)',
              marginTop: 'var(--mebs-spacer-3xl)',
              maxWidth: '400px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
            variants={staggerContainer}
          >
            {[
              { number: '5+', label: 'Years' },
              { number: '50+', label: 'Projects' },
              { number: '100%', label: 'Quality' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                style={{
                  textAlign: 'center',
                  padding: 'var(--mebs-spacer-md)',
                  background: 'var(--mebs-white)',
                  borderRadius: 'var(--mebs-border-radius-lg)',
                  border: 'var(--mebs-border-gold-thin)',
                  boxShadow: 'var(--mebs-shadow-sm)'
                }}
              >
                <div className="text-content-large text-gold" style={{
                  marginBottom: 'var(--mebs-spacer-xs)',
                  fontWeight: 'var(--mebs-font-weight-semibold)'
                }}>
                  {stat.number}
                </div>
                <div className="text-content-small text-uppercase text-spacing-wide" style={{
                  color: 'var(--mebs-gray-600)'
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '100px',
          height: '100px',
          background: 'var(--mebs-royal-gold)',
          borderRadius: '50%',
          opacity: 0.1,
          filter: 'blur(20px)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '30%',
          left: '5%',
          width: '80px',
          height: '80px',
          background: 'var(--mebs-royal-gold-light)',
          borderRadius: '50%',
          opacity: 0.1,
          filter: 'blur(15px)'
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.1, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '60%',
          left: '15%',
          width: '60px',
          height: '60px',
          background: 'var(--mebs-royal-gold)',
          borderRadius: '50%',
          opacity: 0.08,
          filter: 'blur(12px)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  )
}

export default NotFound