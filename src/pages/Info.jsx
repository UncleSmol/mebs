import React from 'react';
import { motion } from 'framer-motion';
import CtaButton from '../common/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  ShieldCheck, 
  Zap, 
  Users, 
  CheckCircle,
  MessageCircle,
  Building,
  Factory,
  Hammer,
  Wrench,
  Sparkles,
  Target,
  HeartHandshake,
  Lightbulb
} from 'lucide-react';

const Info = () => {
  const companyInfo = {
    name: "Mandla Ebhubesi Business Solutions (MEBS)",
    tagline: "The secrete to getting ahead is getting started.",
    description: "MEBS is a premier multi-service engineering company providing comprehensive solutions across electrical, construction, plumbing, and industrial cleaning sectors. With over 5 years of experience, we deliver quality, reliability, and professionalism to every project.",
    founded: "2020",
    employees: "50+",
    projects: "5+"
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '073 872 8919',
      link: 'tel:0738728919'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'nakedicollen@gmail.com',
      link: 'mailto:nakedicollen@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Witbank, Mpumalanga, South Africa',
      link: 'https://maps.google.com/?q=Witbank,Mpumalanga,SouthAfrica'
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon - Fri: 8:00 AM - 5:00 PM',
      link: null
    }
  ]

  const serviceAreas = [
    'Power Plants',
    'Mines & Mining Operations',
    'Industrial Facilities',
    'Construction Sites',
    'Commercial Buildings',
    'Residential Complexes',
    'Shopping Centers',
    'Government Facilities'
  ]

  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Uncompromising commitment to delivering superior quality in every project.'
    },
    {
      icon: ShieldCheck,
      title: 'Safety First',
      description: 'Prioritizing safety protocols and creating secure working environments.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing modern techniques and technologies for efficient solutions.'
    },
    {
      icon: Users,
      title: 'Client Focus',
      description: 'Building lasting relationships through exceptional customer service.'
    }
  ]

  const industryIcons = [
    { icon: Zap, label: 'Electrical' },
    { icon: Hammer, label: 'Construction' },
    { icon: Wrench, label: 'Plumbing' },
    { icon: Factory, label: 'Industrial' },
    { icon: Building, label: 'Commercial' },
    { icon: Sparkles, label: 'Quality' }
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
        padding: 'var(--mebs-spacer-4xl) var(--mebs-spacer-md)',
        position: 'relative'
      }}>
        <div className="container" style={{
          maxWidth: 'var(--mebs-container-lg)',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-main-heading text-gold"
              style={{
                marginBottom: 'var(--mebs-spacer-md)'
              }}
              variants={fadeInUp}
            >
              About MEBS
            </motion.h1>
            
            <motion.p 
              className="text-section-subheading"
              style={{
                marginBottom: 'var(--mebs-spacer-lg)',
                color: 'var(--mebs-gray-200)',
              }}
              variants={fadeInUp}
            >
              {companyInfo.tagline}
            </motion.p>

            <motion.p 
              className="text-content-large"
              style={{
                marginBottom: 'var(--mebs-spacer-2xl)',
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
              variants={fadeInUp}
            >
              {companyInfo.description}
            </motion.p>

            {/* Industry Icons */}
            <motion.div 
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--mebs-spacer-2xl)',
                flexWrap: 'wrap',
                marginBottom: 'var(--mebs-spacer-3xl)'
              }}
              variants={staggerContainer}
            >
              {industryIcons.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={item.label}
                    variants={fadeInUp}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 'var(--mebs-spacer-xs)'
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
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
                      <IconComponent size={28} />
                    </div>
                    <span className="text-content-small text-uppercase" style={{
                      color: 'var(--mebs-gray-400)',
                      fontWeight: 'var(--mebs-font-weight-medium)'
                    }}>
                      {item.label}
                    </span>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--mebs-spacer-xl)',
                marginTop: 'var(--mebs-spacer-3xl)'
              }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <div className="text-display-large text-gold" style={{ marginBottom: 'var(--mebs-spacer-xs)' }}>
                  {companyInfo.founded}
                </div>
                <div className="text-content-body text-uppercase text-spacing-wide">
                  Years Established
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="text-display-large text-gold" style={{ marginBottom: 'var(--mebs-spacer-xs)' }}>
                  {companyInfo.employees}
                </div>
                <div className="text-content-body text-uppercase text-spacing-wide">
                  Expert Team
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="text-display-large text-gold" style={{ marginBottom: 'var(--mebs-spacer-xs)' }}>
                  {companyInfo.projects}
                </div>
                <div className="text-content-body text-uppercase text-spacing-wide">
                  Projects Completed
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
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
              Our Core Values
            </motion.h2>
            
            <motion.p 
              className="text-section-subheading text-center"
              style={{
                marginBottom: 'var(--mebs-spacer-4xl)',
                color: 'var(--mebs-gray-600)'
              }}
              variants={fadeInUp}
            >
              The Principles That Guide Our Work
            </motion.p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--mebs-spacer-2xl)'
            }}>
              {values.map((value, index) => {
                const ValueIcon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    variants={fadeInUp}
                    style={{
                      background: 'var(--mebs-white-off)',
                      padding: 'var(--mebs-spacer-2xl)',
                      borderRadius: 'var(--mebs-border-radius-xl)',
                      border: 'var(--mebs-border-gold-thin)',
                      textAlign: 'center',
                      transition: 'var(--mebs-transition-base)'
                    }}
                    whileHover={{
                      y: -5,
                      boxShadow: 'var(--mebs-shadow-gold)'
                    }}
                  >
                    <div style={{
                      background: 'var(--mebs-gradient-primary)',
                      width: '80px',
                      height: '80px',
                      borderRadius: 'var(--mebs-border-radius-full)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto var(--mebs-spacer-lg)',
                      color: 'var(--mebs-black)'
                    }}>
                      <ValueIcon size={32} />
                    </div>
                    
                    <h3 className="text-section-subheading" style={{
                      marginBottom: 'var(--mebs-spacer-md)',
                      color: 'var(--mebs-black)'
                    }}>
                      {value.title}
                    </h3>
                    
                    <p className="text-content-body" style={{
                      color: 'var(--mebs-gray-600)',
                      margin: 0
                    }}>
                      {value.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section style={{
        background: 'var(--mebs-gradient-black-gold)',
        color: 'var(--mebs-white)',
        padding: 'var(--mebs-spacer-5xl) var(--mebs-spacer-md)'
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
          >
            <motion.h2 
              className="text-section-heading text-center text-gold"
              style={{
                marginBottom: 'var(--mebs-spacer-sm)'
              }}
              variants={fadeInUp}
            >
              Get In Touch
            </motion.h2>
            
            <motion.p 
              className="text-section-subheading text-center"
              style={{
                marginBottom: 'var(--mebs-spacer-4xl)'
              }}
              variants={fadeInUp}
            >
              Ready to Start Your Project?
            </motion.p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--mebs-spacer-2xl)',
              marginBottom: 'var(--mebs-spacer-4xl)'
            }}>
              {contactInfo.map((contact, index) => {
                const ContactIcon = contact.icon
                return (
                  <motion.div
                    key={contact.label}
                    variants={fadeInUp}
                    style={{
                      background: 'var(--mebs-bg-highlight-gold)',
                      padding: 'var(--mebs-spacer-xl)',
                      borderRadius: 'var(--mebs-border-radius-lg)',
                      textAlign: 'center',
                      transition: 'var(--mebs-transition-base)'
                    }}
                    whileHover={{
                      scale: 1.05,
                      background: 'var(--mebs-bg-highlight-gold-strong)'
                    }}
                  >
                    <div style={{
                      color: 'var(--mebs-royal-gold)',
                      marginBottom: 'var(--mebs-spacer-md)',
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                      <ContactIcon size={32} />
                    </div>
                    
                    <h3 className="text-content-large" style={{
                      marginBottom: 'var(--mebs-spacer-xs)',
                      color: 'var(--mebs-white)'
                    }}>
                      {contact.label}
                    </h3>
                    
                    {contact.link ? (
                      <a 
                        href={contact.link}
                        className="text-content-body"
                        style={{
                          color: 'var(--mebs-royal-gold-light)',
                          textDecoration: 'none',
                          transition: 'var(--mebs-transition-base)',
                          display: 'block'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = 'var(--mebs-white)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = 'var(--mebs-royal-gold-light)';
                        }}
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-content-body" style={{
                        color: 'var(--mebs-royal-gold-light)',
                        margin: 0
                      }}>
                        {contact.value}
                      </p>
                    )}
                  </motion.div>
                )
              })}
            </div>

            <motion.div 
              style={{
                textAlign: 'center'
              }}
              variants={fadeInUp}
            >
              <CtaButton size="lg" icon={MessageCircle}>
                Request Consultation
              </CtaButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section style={{
        background: 'var(--mebs-white-off)',
        padding: 'var(--mebs-spacer-5xl) var(--mebs-spacer-md)'
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
          >
            <motion.h2 
              className="text-section-heading text-center"
              style={{
                marginBottom: 'var(--mebs-spacer-sm)',
                color: 'var(--mebs-royal-gold)'
              }}
              variants={fadeInUp}
            >
              Areas We Serve
            </motion.h2>
            
            <motion.p 
              className="text-section-subheading text-center"
              style={{
                marginBottom: 'var(--mebs-spacer-3xl)',
                color: 'var(--mebs-gray-600)'
              }}
              variants={fadeInUp}
            >
              Comprehensive Service Coverage Across Multiple Industries
            </motion.p>

            <motion.div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--mebs-spacer-lg)'
              }}
              variants={fadeInUp}
            >
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={area}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--mebs-spacer-sm)',
                    padding: 'var(--mebs-spacer-md)',
                    background: 'var(--mebs-white)',
                    borderRadius: 'var(--mebs-border-radius-lg)',
                    boxShadow: 'var(--mebs-shadow-sm)',
                    transition: 'var(--mebs-transition-base)'
                  }}
                  whileHover={{
                    x: 5,
                    boxShadow: 'var(--mebs-shadow)'
                  }}
                >
                  <CheckCircle size={20} style={{
                    color: 'var(--mebs-royal-gold)',
                    flexShrink: 0
                  }} />
                  <span className="text-content-body" style={{
                    fontWeight: 'var(--mebs-font-weight-medium)',
                    color: 'var(--mebs-gray-600)'
                  }}>
                    {area}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section style={{
        background: 'var(--mebs-gradient-gold)',
        color: 'var(--mebs-black)',
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
            <motion.div 
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--mebs-spacer-md)',
                marginBottom: 'var(--mebs-spacer-lg)'
              }}
              variants={fadeInUp}
            >
              <Target size={40} style={{ color: 'var(--mebs-royal-gold)' }} />
              <HeartHandshake size={40} style={{ color: 'var(--mebs-royal-gold)' }} />
              <Sparkles size={40} style={{ color: 'var(--mebs-royal-gold)' }} />
            </motion.div>

            <motion.h2 
              className="text-section-heading"
              style={{
                marginBottom: 'var(--mebs-spacer-md)',
                color: 'var(--mebs-royal-gold)'
              }}
              variants={fadeInUp}
            >
              Our Mission
            </motion.h2>
            
            <motion.p 
              className="text-content-large"
              style={{
                marginBottom: 'var(--mebs-spacer-xl)',
                fontWeight: 'var(--mebs-font-weight-medium)',
                color: 'var(--mebs-gray-600)'
              }}
              variants={fadeInUp}
            >
              To deliver exceptional multi-service engineering solutions that empower industries, 
              enhance communities, and build a sustainable future through innovation, quality, and reliability.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <CtaButton 
                variant="primary" 
                size="lg" 
                icon={Users}
                style={{
                  background: 'var(--mebs-black)',
                  color: 'var(--mebs-white)',
                  borderColor: 'var(--mebs-black)'
                }}
              >
                Join Our Success Story
              </CtaButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Info