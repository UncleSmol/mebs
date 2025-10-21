import React from 'react'
import { motion } from 'framer-motion'
import CtaButton from '../common/ui/button'
import { 
  Zap, 
  Hammer, 
  SprayCan, 
  Wrench, 
  Phone, 
  ArrowRight, 
  Check,
  MessageCircle,
  Mail
} from 'lucide-react'

const Homepage = () => {
  const services = [
    {
      icon: Zap,
      title: 'Electrical Engineering',
      description: 'Professional electrical maintenance, installations, and industrial power solutions for plants, mines, and commercial facilities.',
      features: ['Industrial Maintenance', 'Power Systems', 'Safety Compliance', '24/7 Emergency Service']
    },
    {
      icon: Hammer,
      title: 'Construction Services',
      description: 'Complete construction solutions from planning to execution, including industrial buildings and infrastructure development.',
      features: ['Building Construction', 'Structural Repairs', 'Project Management', 'Quality Assurance']
    },
    {
      icon: SprayCan,
      title: 'Industrial Cleaning',
      description: 'Comprehensive cleaning services for industrial facilities, ensuring safe and hygienic working environments.',
      features: ['Factory Cleaning', 'Equipment Cleaning', 'Waste Management', 'Safety Standards']
    },
    {
      icon: Wrench,
      title: 'Plumbing Services',
      description: 'Expert plumbing solutions for industrial and residential properties, including maintenance and emergency repairs.',
      features: ['Pipe Installations', 'Maintenance', 'Emergency Repairs', 'System Upgrades']
    }
  ]

  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
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
                marginBottom: 'var(--mebs-spacer-xl)',
                textAlign: 'center'
              }}
              variants={fadeInUp}
            >
              Mandla Ebhubesi Business Solutions
            </motion.h1>
            
            <motion.p 
              className="text-main-subheading text-center"
              style={{
                marginBottom: 'var(--mebs-spacer-2xl)',
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
              variants={fadeInUp}
            >
              The Secret to Getting Ahead is Getting Started
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
              Providing comprehensive engineering services including electrical maintenance, construction, industrial cleaning, and plumbing solutions across South Africa.
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
              <CtaButton size="lg" icon={Phone}>
                Get Free Quote
              </CtaButton>
              <CtaButton variant="outline" size="lg" icon={ArrowRight}>
                Our Services
              </CtaButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Gold accent elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'var(--mebs-royal-gold)',
          borderRadius: '50%',
          opacity: 0.1,
          filter: 'blur(40px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '150px',
          height: '150px',
          background: 'var(--mebs-royal-gold-light)',
          borderRadius: '50%',
          opacity: 0.1,
          filter: 'blur(30px)'
        }} />
      </section>

      {/* Stats Section */}
      <section style={{
        background: 'var(--mebs-white)',
        padding: 'var(--mebs-spacer-4xl) var(--mebs-spacer-md)'
      }}>
        <div className="container" style={{
          maxWidth: 'var(--mebs-container-lg)',
          margin: '0 auto'
        }}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--mebs-spacer-2xl)',
              textAlign: 'center'
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                style={{
                  padding: 'var(--mebs-spacer-xl)',
                  border: ' var(--mebs-border-gold-thin)',
                  borderRadius: 'var(--mebs-border-radius-2xl)',
                  boxShadow: 'var( --mebs-shadow-gold)'
                }}
              >
                <div 
                className="text-display-large text-gold" 
                style={{
                  marginBottom: 'var(--mebs-spacer-xs)',
                  color: 'var(--mebs-royal-gold)'
                }}>
                  {stat.number}
                </div>
                <div 
                className="text-content-body text-gray-dark text-uppercase text-spacing-wide"
                style={{
                  color: 'var(--mebs-gray-800)'
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{
        background: 'var(--mebs-white-off)',
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
              Our Comprehensive Services
            </motion.h2>
            
            <motion.p 
              className="text-section-subheading text-center"
              style={{
                marginBottom: 'var(--mebs-spacer-4xl)',
                color: 'var(--mebs-gray-800)'
              }}
              variants={fadeInUp}
            >
              Delivering Excellence Across Multiple Engineering Disciplines
            </motion.p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--mebs-spacer-2xl)'
            }}>
              {services.map((service, index) => {
                const ServiceIcon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    variants={fadeInUp}
                    style={{
                      background: 'var(--mebs-white)',
                      padding: 'var(--mebs-spacer-2xl)',
                      borderRadius: 'var(--mebs-border-radius-xl)',
                      boxShadow: 'var(--mebs-shadow)',
                      border: 'var(--mebs-border-gold-thin)',
                      transition: 'var(--mebs-transition-base)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                    whileHover={{
                      y: -10,
                      boxShadow: 'var(--mebs-shadow-gold-lg)'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--mebs-spacer-md)',
                      marginBottom: 'var(--mebs-spacer-lg)'
                    }}>
                      <div style={{
                        background: 'var(--mebs-gradient-primary)',
                        width: '60px',
                        height: '60px',
                        borderRadius: 'var(--mebs-border-radius-lg)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--mebs-black)'
                      }}>
                        <ServiceIcon size={28} />
                      </div>
                      <h3 className="text-section-subheading" style={{ margin: 0 }}>
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-content-body" style={{
                      marginBottom: 'var(--mebs-spacer-lg)',
                      flex: 1,
                      color: 'var(--mebs-gray-600)'
                    }}>
                      {service.description}
                    </p>

                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--mebs-spacer-xs)',
                          marginBottom: 'var(--mebs-spacer-xs)',
                          fontFamily: 'var(--mebs-font-family-body)',
                          fontSize: 'var(--mebs-font-size-sm)',
                          color: 'var(--mebs-gray-600)'
                        }}>
                          <Check size={16} style={{
                            color: 'var(--mebs-royal-gold)',
                            flexShrink: 0
                          }} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div style={{
                      marginTop: 'var(--mebs-spacer-xl)',
                      paddingTop: 'var(--mebs-spacer-md)',
                      borderTop: 'var(--mebs-border-light)'
                    }}>
                      <CtaButton 
                        to="/services"
                        variant="secondary" 
                        size="sm" 
                        fullWidth>
                          Learn More
                      </CtaButton>
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
              Contact us today for a free consultation and quote. Let's build excellence together.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <CtaButton size="lg" icon={MessageCircle}>
                Contact Us Now
              </CtaButton>
            </motion.div>

            <motion.div 
              className="text-content-small"
              style={{
                marginTop: 'var(--mebs-spacer-lg)',
                opacity: 0.7
              }}
              variants={fadeInUp}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: 'var(--mebs-spacer-xs)',
                marginBottom: 'var(--mebs-spacer-xs)' 
              }}>
                <Phone size={16} />
                073 872 8919
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: 'var(--mebs-spacer-xs)'
              }}>
                <Mail size={16} />
                nakedicollen@gmail.com
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Homepage