import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const CtaButton = ({ 
  children = "Get Started", 
  variant = "primary",
  size = "md", 
  onClick,
  to = null,
  href = null,
  disabled = false,
  loading = false,
  icon = null, 
  fullWidth = false,
  type = "button",
  className = ""
}) => {
  
  const navigate = useNavigate()

  /* Handle click with navigation support */
  const handleClick = (e) => {
    if (disabled || loading) return
    
    if (onClick) {
      onClick(e)
    }
    
    if (to && !e.defaultPrevented) {
      e.preventDefault()
      navigate(to)
    } else if (href && !e.defaultPrevented) {
      window.location.href = href
    }
  }

  /* Size configurations */
  const sizeConfig = {
    sm: {
      fontSize: 'var(--mebs-font-size-sm)',
      padding: 'var(--mebs-spacer-xs) var(--mebs-spacer-md)',
      minHeight: '2.5rem',
      iconSize: '0.875rem'
    },
    md: {
      fontSize: 'var(--mebs-font-size-base)',
      padding: 'var(--mebs-spacer-sm) var(--mebs-spacer-lg)',
      minHeight: '3rem',
      iconSize: '1rem'
    },
    lg: {
      fontSize: 'var(--mebs-font-size-lg)',
      padding: 'var(--mebs-spacer-md) var(--mebs-spacer-xl)',
      minHeight: '3.5rem',
      iconSize: '1.125rem'
    }
  }

  /* Variant configurations */
  const variantConfig = {
    primary: {
      background: 'var(--mebs-gradient-primary)',
      color: 'var(--mebs-black)',
      boxShadow: 'var(--mebs-shadow-gold)',
      hoverBackground: 'var(--mebs-gradient-primary-reverse)',
      hoverShadow: 'var(--mebs-shadow-gold-lg)'
    },
    secondary: {
      background: 'var(--mebs-black)',
      color: 'var(--mebs-white)',
      boxShadow: 'var(--mebs-shadow)',
      hoverBackground: 'var(--mebs-black-light)',
      hoverColor: 'var(--mebs-royal-gold-light)',
      hoverShadow: 'var(--mebs-shadow-lg)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--mebs-royal-gold)',
      border: 'var(--mebs-border-gold-thin)',
      boxShadow: 'var(--mebs-shadow-sm)',
      hoverBackground: 'var(--mebs-bg-highlight-gold)',
      hoverShadow: 'var(--mebs-shadow-gold)'
    }
  }

  const currentSize = sizeConfig[size]
  const currentVariant = variantConfig[variant]

  /* Base button styles */
  const buttonStyles = {
    /* Layout */
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--mebs-spacer-xs)',
    width: fullWidth ? '100%' : 'auto',
    minHeight: currentSize.minHeight,
    padding: currentSize.padding,
    
    /* Typography */
    fontFamily: 'var(--mebs-font-family-body)',
    fontSize: currentSize.fontSize,
    fontWeight: 'var(--mebs-font-weight-semibold)',
    letterSpacing: 'var(--mebs-tracking-wide)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    
    /* Colors & Background */
    background: currentVariant.background,
    color: currentVariant.color,
    border: currentVariant.border || 'none',
    
    /* Effects */
    boxShadow: currentVariant.boxShadow,
    borderRadius: 'var(--mebs-btn-border-radius)',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled || loading ? 0.6 : 1,
    
    /* Positioning */
    position: 'relative',
    overflow: 'hidden',
    outline: 'none',
    
    /* Transitions */
    transition: 'all var(--mebs-transition-base)'
  }

  /* Loading spinner styles */
  const spinnerStyles = {
    width: '16px',
    height: '16px',
    border: '2px solid transparent',
    borderTop: `2px solid ${variant === 'primary' ? 'var(--mebs-black)' : 'currentColor'}`,
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  }

  /* Gold shimmer overlay styles */
  const shimmerStyles = {
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
    transition: 'left 0.6s ease'
  }

  /* Gold accent line styles */
  const accentLineStyles = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    background: 'var(--mebs-royal-gold)',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.3s ease'
  }

  /* Inline keyframes for spinner */
  const spinnerKeyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `

  /* Determine component type */
  const Component = to || href ? motion.a : motion.button
  const componentProps = {
    ...(to || href ? { href: to || href } : { type }),
    style: buttonStyles,
    className,
    onClick: handleClick,
    disabled: disabled || loading
  }

  return (
    <>
      {/* Inject spinner animation */}
      <style>{spinnerKeyframes}</style>
      
      <Component
        {...componentProps}
        whileHover={!disabled && !loading ? { 
          scale: 1.05,
          y: -2
        } : {}}
        whileTap={!disabled && !loading ? { 
          scale: 0.95 
        } : {}}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17
        }}
        onMouseEnter={(e) => {
          if (!disabled && !loading) {
            const shimmer = e.currentTarget.querySelector('.gold-shimmer')
            if (shimmer) shimmer.style.left = '100%'
            
            const accent = e.currentTarget.querySelector('.gold-accent')
            if (accent) accent.style.transform = 'scaleX(1)'
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled && !loading) {
            const shimmer = e.currentTarget.querySelector('.gold-shimmer')
            if (shimmer) shimmer.style.left = '-100%'
            
            const accent = e.currentTarget.querySelector('.gold-accent')
            if (accent) accent.style.transform = 'scaleX(0)'
          }
        }}
      >
        {/* Gold shimmer overlay for primary button */}
        {variant === 'primary' && !disabled && (
          <div className="gold-shimmer" style={shimmerStyles} />
        )}

        {/* Loading spinner */}
        {loading && (
          <div style={spinnerStyles} />
        )}

        {/* Icon */}
        {icon && !loading && (
          <i 
            className={`bi bi-${icon}`} 
            style={{ 
              fontSize: currentSize.iconSize,
              lineHeight: 1 
            }} 
          />
        )}

        {/* Button text */}
        <span style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </span>

        {/* Gold accent line for primary button */}
        {variant === 'primary' && !disabled && (
          <div className="gold-accent" style={accentLineStyles} />
        )}
      </Component>
    </>
  )
}

export default CtaButton