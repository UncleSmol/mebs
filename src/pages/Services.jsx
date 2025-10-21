import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Hammer, Droplets, Wrench, ArrowRight, CheckCircle2, Phone, Mail } from 'lucide-react'
import CtaButton from '../common/ui/button'

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: 'Electrical Engineering',
      description: 'Comprehensive electrical solutions for industrial, commercial, and residential properties. Our certified electricians ensure safe and efficient power systems.',
      features: [
        'Industrial Electrical Maintenance',
        'Power Plant Electrical Systems',
        'Commercial Building Wiring',
        'Residential Electrical Installations',
        'Emergency Electrical Repairs',
        'Safety Compliance Inspections',
        'Energy Efficiency Upgrades',
        '24/7 Emergency Services'
      ],
      areas: ['Power Plants', 'Mines', 'Factories', 'Commercial Buildings', 'Residential Areas']
    },
    {
      icon: Hammer,
      title: 'Construction Services',
      description: 'End-to-end construction solutions from planning to completion. We build durable structures that stand the test of time.',
      features: [
        'Industrial Building Construction',
        'Structural Repairs & Maintenance',
        'Project Management',
        'Quality Control & Assurance',
        'Construction Planning',
        'Material Sourcing',
        'Safety Compliance',
        'Timely Project Delivery'
      ],
      areas: ['Industrial Facilities', 'Commercial Buildings', 'Structural Repairs', 'New Construction']
    },
    {
      icon: Droplets,
      title: 'Industrial Cleaning',
      description: 'Professional cleaning services for industrial facilities, ensuring safe, hygienic, and compliant working environments.',
      features: [
        'Factory & Plant Cleaning',
        'Equipment Degreasing',
        'High-Pressure Cleaning',
        'Waste Management',
        'Hazardous Material Cleanup',
        'Post-Construction Cleaning',
        'Regular Maintenance Cleaning',
        'Safety Standard Compliance'
      ],
      areas: ['Manufacturing Plants', 'Industrial Facilities', 'Construction Sites', 'Commercial Properties']
    },
    {
      icon: Wrench,
      title: 'Plumbing Services',
      description: 'Expert plumbing solutions for all types of properties. From routine maintenance to complex installations.',
      features: [
        'Pipe Installation & Repair',
        'Drainage Systems',
        'Water Heater Installation',
        'Emergency Leak Repairs',
        'Preventive Maintenance',
        'System Upgrades',
        'Commercial Plumbing',
        'Residential Plumbing'
      ],
      areas: ['Industrial Plumbing', 'Commercial Buildings', 'Residential Properties', 'Emergency Repairs']
    }
  ]

  const serviceStats = [
    { number: '24/7', label: 'Emergency Support' },
    { number: '100%', label: 'Safety Compliance' },
    { number: '5+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' }
  ]

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
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <section style={{
        background: 'var(--mebs-gradient-dark-elegant)',
        color: 'var(--mebs-white)',
        padding: 'var(--mebs-spacer-5xl) var(--mebs-spacer-md)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{
          maxWidth: 'var(--mebs-container-xl)',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-main-heading text-gold-glow"
              style={{
                marginBottom: 'var(--mebs-spacer-md)',
                textAlign: 'center',
              }}
              variants={fadeInUp}
            >
              Our Services
            </motion.h1>
            
            <motion.p 
              className="text-main-subheading text-center"
              style={{
                marginBottom: 'var(--mebs-spacer-xl)',
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              variants={fadeInUp}
            >
              Comprehensive Engineering Solutions for Every Industry
            </motion.p>

            <motion.p 
              className="text-content-large text-center"
              style={{
                marginBottom: 'var(--mebs-spacer-3xl)',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
                opacity: 0.9
              }}
              variants={fadeInUp}
            >
              MEBS delivers professional, reliable, and efficient services across multiple engineering disciplines, ensuring quality and safety in every project.
            </motion.p>

            <motion.div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--mebs-spacer-xl)',
                marginTop: 'var(--mebs-spacer-4xl)'
              }}
              variants={staggerContainer}
            >
              {serviceStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  style={{
                    textAlign: 'center',
                    padding: 'var(--mebs-spacer-lg)'
                  }}
                  variants={fadeInUp}
                >
                  <div className="text-display-large text-gold" style={{
                    marginBottom: 'var(--mebs-spacer-xs)'
                  }}>
                    {stat.number}
                  </div>
                  <div className="text-content-body text-uppercase text-spacing-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Background elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '150px',
          height: '150px',
          background: 'var(--mebs-royal-gold)',
          borderRadius: '50%',
          opacity: 0.1,
          filter: 'blur(30px)'
        }} />
      </section>

      {/* Services Detail Section */}
      <section style={{
        background: 'var(--mebs-white)',
        padding: 'var(--mebs-spacer-5xl) var(--mebs-spacer-md)'
      }}>
        <div className="container" style={{
          maxWidth: 'var(--mebs-container-xl)',
          margin: '0 auto'
        }}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-section-heading text-center"
              style={{
                marginBottom: 'var(--mebs-spacer-sm)',
                color: 'var(--mebs-royal-gold)'
              }}
              variants={fadeInUp}
            >
              Professional Engineering Services
            </motion.h2>
            
            <motion.p 
              className="text-section-subheading text-center"
              style={{
                marginBottom: 'var(--mebs-spacer-4xl)',
                color: 'var(--mebs-gray-600)'
              }}
              variants={fadeInUp}
            >
              Tailored Solutions for Your Specific Needs
            </motion.p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--mebs-spacer-4xl)'
            }}>
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={service.title}
                    variants={fadeInUp}
                    style={{
                      background: index % 2 === 0 ? 'var(--mebs-white-off)' : 'var(--mebs-white)',
                      padding: 'var(--mebs-spacer-4xl)',
                      borderRadius: 'var(--mebs-border-radius-2xl)',
                      border: 'var(--mebs-border-gold-thin)',
                      boxShadow: index % 2 === 0 ? 'var(--mebs-shadow)' : 'none'
                    }}
                  >
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                      gap: 'var(--mebs-spacer-3xl)',
                      alignItems: 'start'
                    }}>
                      {/* Service Header */}
                      <div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--mebs-spacer-md)',
                          marginBottom: 'var(--mebs-spacer-lg)'
                        }}>
                          <div style={{
                            background: 'var(--mebs-gradient-primary)',
                            width: '80px',
                            height: '80px',
                            borderRadius: 'var(--mebs-border-radius-lg)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--mebs-black)'
                          }}>
                            <IconComponent size={32} strokeWidth={2} />
                          </div>
                          <h3 className="text-section-subheading" style={{ 
                            margin: 0,
                            color: 'var(--mebs-black)'
                          }}>
                            {service.title}
                          </h3>
                        </div>
                        
                        <p className="text-content-large" style={{
                          marginBottom: 'var(--mebs-spacer-xl)',
                          color: 'var(--mebs-gray-700)'
                        }}>
                          {service.description}
                        </p>

                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 'var(--mebs-spacer-sm)',
                          marginBottom: 'var(--mebs-spacer-xl)'
                        }}>
                          {service.areas.map((area, areaIndex) => (
                            <span
                              key={areaIndex}
                              style={{
                                background: 'var(--mebs-bg-highlight-gold)',
                                color: 'var(--mebs-black)',
                                padding: 'var(--mebs-spacer-xs) var(--mebs-spacer-sm)',
                                borderRadius: 'var(--mebs-border-radius-pill)',
                                fontSize: 'var(--mebs-font-size-sm)',
                                fontWeight: 'var(--mebs-font-weight-medium)'
                              }}
                            >
                              {area}
                            </span>
                          ))}
                        </div>

                        <CtaButton variant="primary">
                          <ArrowRight size={16} style={{ marginLeft: '4px' }} />
                          Get Service Quote
                        </CtaButton>
                      </div>

                      {/* Service Features */}
                      <div>
                        <h4 className="text-content-large" style={{
                          marginBottom: 'var(--mebs-spacer-lg)',
                          color: 'var(--mebs-black)',
                          fontWeight: 'var(--mebs-font-weight-semibold)'
                        }}>
                          Service Features
                        </h4>
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                          gap: 'var(--mebs-spacer-md)'
                        }}>
                          {service.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 'var(--mebs-spacer-sm)'
                              }}
                            >
                              <CheckCircle2 
                                size={16} 
                                style={{
                                  color: 'var(--mebs-royal-gold)',
                                  marginTop: '2px',
                                  flexShrink: 0
                                }} 
                              />
                              <span className="text-content-body" style={{
                                color: 'var(--mebs-gray-700)'
                              }}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'var(--mebs-gradient-black-gold)',
        color: 'var(--mebs-white)',
        padding: 'var(--mebs-spacer-5xl) var(--mebs-spacer-md)',
        textAlign: 'center'
      }}>
        <div className="container" style={{
          maxWidth: 'var(--mebs-container-md)',
          margin: '0 auto'
        }}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-section-heading text-gold"
              style={{
                marginBottom: 'var(--mebs-spacer-md)'
              }}
              variants={fadeInUp}
            >
              Ready to Start Your Project?
            </motion.h2>
            
            <motion.p 
              className="text-content-large"
              style={{
                marginBottom: 'var(--mebs-spacer-2xl)',
                opacity: 0.9
              }}
              variants={fadeInUp}
            >
              Contact us today for a free consultation and customized service quote.
            </motion.p>

            <motion.div 
              style={{
                display: 'flex',
                gap: 'var(--mebs-spacer-md)',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
              variants={fadeInUp}
            >
              <CtaButton size="lg">
                <Phone size={16} style={{ marginRight: '4px' }} />
                Call Now
              </CtaButton>
              <CtaButton variant="outline" size="lg">
                <Mail size={16} style={{ marginRight: '4px' }} />
                Email Us
              </CtaButton>
            </motion.div>

            <motion.div 
              className="text-content-small"
              style={{
                marginTop: 'var(--mebs-spacer-2xl)',
                opacity: 0.7
              }}
              variants={fadeInUp}
            >
              <div style={{ 
                marginBottom: 'var(--mebs-spacer-xs)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--mebs-spacer-xs)'
              }}>
                <Phone size={14} />
                073 872 8919
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--mebs-spacer-xs)'
              }}>
                <Mail size={14} />
                nakedicollen@gmail.com
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services