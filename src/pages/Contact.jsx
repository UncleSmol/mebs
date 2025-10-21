import React from 'react'
import { motion } from 'framer-motion'
import CtaButton from '../common/ui/button'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Zap,
  AlertTriangle,
  CheckCircle,
  Award
} from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '073 872 8919',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'nakedicollen@gmail.com',
      description: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'Our Business Location',
      description: 'Visit us during business hours'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday',
      description: '8:00 AM - 5:00 PM'
    }
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
                textAlign: 'center'
              }}
              variants={fadeInUp}
            >
              Contact Us
            </motion.h1>
            
            <motion.p 
              className="text-main-subheading text-center"
              style={{
                marginBottom: 'var(--mebs-spacer-xl)',
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
              variants={fadeInUp}
            >
              Get in Touch with MEBS Today
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
              Ready to discuss your project? Contact us for professional engineering solutions and exceptional service.
            </motion.p>
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

      {/* Contact Content Section */}
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
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--mebs-spacer-4xl)',
              alignItems: 'start'
            }}
          >
            {/* Contact Information */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-section-heading" style={{
                marginBottom: 'var(--mebs-spacer-2xl)',
                color: 'var(--mebs-royal-gold)'
              }}>
                Get In Touch
              </h2>
              
              <p className="text-content-large" style={{
                marginBottom: 'var(--mebs-spacer-3xl)',
                color: 'var(--mebs-gray-700)'
              }}>
                We're here to help with your engineering and business solution needs. Reach out through any of these channels.
              </p>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--mebs-spacer-2xl)',
                marginBottom: 'var(--mebs-spacer-3xl)'
              }}>
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <div
                      key={contact.title}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--mebs-spacer-md)',
                        padding: 'var(--mebs-spacer-lg)',
                        background: 'var(--mebs-white-off)',
                        borderRadius: 'var(--mebs-border-radius-lg)',
                        border: 'var(--mebs-border-light)'
                      }}
                    >
                      <div style={{
                        background: 'var(--mebs-gradient-primary)',
                        width: '50px',
                        height: '50px',
                        borderRadius: 'var(--mebs-border-radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--mebs-black)',
                        flexShrink: 0
                      }}>
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className="text-content-large" style={{
                          margin: '0 0 var(--mebs-spacer-xs) 0',
                          color: 'var(--mebs-black)',
                          fontWeight: 'var(--mebs-font-weight-semibold)'
                        }}>
                          {contact.title}
                        </h3>
                        <p className="text-content-body" style={{
                          margin: '0 0 var(--mebs-spacer-xs) 0',
                          color: 'var(--mebs-gray-800)',
                          fontWeight: 'var(--mebs-font-weight-medium)'
                        }}>
                          {contact.details}
                        </p>
                        <p className="text-content-small" style={{
                          margin: 0,
                          color: 'var(--mebs-gray-600)'
                        }}>
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div>
                <h3 className="text-content-large" style={{
                  marginBottom: 'var(--mebs-spacer-lg)',
                  color: 'var(--mebs-black)',
                  fontWeight: 'var(--mebs-font-weight-semibold)'
                }}>
                  Quick Actions
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--mebs-spacer-md)'
                }}>
                  <CtaButton variant="primary" icon={Phone} fullWidth>
                    Call Now
                  </CtaButton>
                  <CtaButton variant="outline" icon={Mail} fullWidth>
                    Send Email
                  </CtaButton>
                  <CtaButton variant="secondary" icon={MessageCircle} fullWidth>
                    Get Quote
                  </CtaButton>
                </div>
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-section-heading" style={{
                marginBottom: 'var(--mebs-spacer-lg)',
                color: 'var(--mebs-royal-gold)'
              }}>
                Our Location
              </h2>
              
              <p className="text-content-body" style={{
                marginBottom: 'var(--mebs-spacer-2xl)',
                color: 'var(--mebs-gray-700)'
              }}>
                Visit our offices or get directions using the map below.
              </p>

              <div style={{
                borderRadius: 'var(--mebs-border-radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--mebs-shadow)',
                border: 'var(--mebs-border-gold-thin)'
              }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.734966298651!2d29.21415267605514!3d-25.87819897727898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eeaed43b2024c81%3A0x1174b5ae30fd9ced!2sMandla%20Ebhubesi%20Business%20Solutions!5e0!3m2!1sen!2sza!4v1761046186293!5m2!1sen!2sza" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MEBS Location Map"
                />
              </div>

              <div style={{
                marginTop: 'var(--mebs-spacer-xl)',
                padding: 'var(--mebs-spacer-lg)',
                background: 'var(--mebs-bg-highlight-gold)',
                borderRadius: 'var(--mebs-border-radius-lg)',
                border: 'var(--mebs-border-gold-thin)'
              }}>
                <h4 className="text-content-body" style={{
                  margin: '0 0 var(--mebs-spacer-sm) 0',
                  color: 'var(--mebs-black)',
                  fontWeight: 'var(--mebs-font-weight-semibold)'
                }}>
                  Office Directions
                </h4>
                <p className="text-content-small" style={{
                  margin: 0,
                  color: 'var(--mebs-gray-700)'
                }}>
                  Our offices are conveniently located and easily accessible. Feel free to visit us during business hours for consultations and meetings.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section style={{
        background: 'var(--mebs-gradient-gold)',
        color: 'var(--mebs-black)',
        padding: 'var(--mebs-spacer-4xl) var(--mebs-spacer-md)',
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
            <motion.div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--mebs-spacer-md)',
                marginBottom: 'var(--mebs-spacer-lg)'
              }}
              variants={fadeInUp}
            >
              <AlertTriangle size={32} style={{
                color: 'var(--mebs-black)'
              }} />
              <h2 className="text-section-heading" style={{
                margin: 0,
                color: 'var(--mebs-royal-gold)'
              }}>
                24/7 Emergency Services
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-content-large"
              style={{
                marginBottom: 'var(--mebs-spacer-xl)',
                fontWeight: 'var(--mebs-font-weight-medium)',
                color: 'var(--mebs-gray-700)'
              }}
              variants={fadeInUp}
            >
              For urgent electrical, plumbing, and maintenance emergencies outside business hours
            </motion.p>

            <motion.div variants={fadeInUp}>
              <CtaButton 
                size="lg" 
                icon={Phone}
                variant="primary"
                style={{
                  background: 'var(--mebs-black)',
                  color: 'var(--mebs-white)',
                  borderColor: 'var(--mebs-black)'
                }}
              >
                Emergency Hotline: 073 872 8919
              </CtaButton>
            </motion.div>
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
              Start Your Project Today
            </motion.h2>
            
            <motion.p 
              className="text-content-large"
              style={{
                marginBottom: 'var(--mebs-spacer-2xl)',
                opacity: 0.9
              }}
              variants={fadeInUp}
            >
              Contact us for a free consultation and quote. Let's discuss how we can bring excellence to your project.
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
                Call Now
              </CtaButton>
              <CtaButton variant="outline" size="lg" icon={Mail}>
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

export default Contact