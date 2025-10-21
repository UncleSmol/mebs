import React from 'react'
import { motion } from 'framer-motion'
import CtaButton from '../common/ui/button'
import { 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Award, 
  Phone, 
  Mail,
  Zap,
  Hammer,
  Wrench,
  Building
} from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Samancor Ferrometals',
      period: '2022 - 2023',
      location: 'South Africa',
      description: 'Comprehensive engineering services including cable stringing, strapping and terminating, roofing works, and electrical installations for one of the leading ferrometals producers.',
      services: [
        'Cable Stringing & Installation',
        'Cable Strapping & Termination',
        'Roofing Works & Maintenance',
        'Electrical System Installation',
        'Industrial Power Solutions',
        'Safety Compliance Implementation'
      ],
      achievements: [
        'Completed project ahead of schedule',
        'Zero safety incidents recorded',
        'Improved electrical system reliability',
        'Enhanced facility infrastructure'
      ],
      images: [
        '1761044099234.jpg',
        '1761044118302.jpg',
        '1761044122114.jpg',
        '1761044140198.jpg',
        '1761044143638.jpg',
        '1761044146998.jpg',
        '1761044162867.jpg',
        '1761044166514.jpg',
        '1761044198011.jpg',
        '1761044201125.jpg',
        '1761044203897.jpg',
        '1761044239321.jpg',
        '1761044242052.jpg',
        '1761044244542.jpg',
        '1761044247101.jpg',
        '1761044249530.jpg',
        '1761044251696.jpg'
      ],
      folder: 'samancor',
      icon: Zap
    },
    {
      title: 'Exxaro Plumbing Works',
      period: 'June 2022 - December 2022',
      location: 'South Africa',
      description: 'Professional plumbing services and maintenance for Exxaro, one of South Africa\'s largest mining companies. Comprehensive plumbing solutions for industrial facilities.',
      services: [
        'Industrial Plumbing Installation',
        'Pipe System Maintenance',
        'Emergency Plumbing Repairs',
        'Water System Upgrades',
        'Preventive Maintenance',
        'Compliance Inspections'
      ],
      achievements: [
        'Completed 6-month project on schedule',
        'Zero downtime during maintenance',
        'Improved water system efficiency',
        '100% compliance with industry standards'
      ],
      images: [
        '1761045119143.jpg',
        '1761045122243.jpg',
        '1761045125372.jpg',
        '1761045128495.jpg',
        '1761045131417.jpg',
        '1761045134534.jpg',
        '1761045137720.jpg'
      ],
      folder: 'exxaro',
      icon: Wrench
    },
    {
      title: 'Residential Plumbing Repair',
      period: '2022',
      location: 'Residential Property',
      description: 'Emergency residential plumbing repair involving complete replacement of a toilet that had broken off the wall. Professional restoration ensuring structural integrity and functionality.',
      services: [
        'Emergency Plumbing Repair',
        'Toilet Replacement & Installation',
        'Wall Structural Repair',
        'Water Supply Connection',
        'Leak Prevention',
        'Quality Testing & Inspection'
      ],
      achievements: [
        '24-hour emergency response',
        'Complete structural restoration',
        'Zero water damage after repair',
        'Customer satisfaction guaranteed'
      ],
      images: [
        '1761045565607.jpg',
        '1761045568957.jpg',
        '1761045580878.jpg'
      ],
      folder: 'residentials',
      icon: Wrench
    },
    {
      title: 'MEBS Office Setup',
      period: '2023',
      location: 'Current Business Address',
      description: 'Complete setup and establishment of MEBS headquarters and operational offices. Professional workspace design and infrastructure implementation for optimal business operations.',
      services: [
        'Office Space Planning',
        'Electrical System Installation',
        'Networking Infrastructure',
        'Workspace Optimization',
        'Safety Compliance Setup',
        'Operational Readiness'
      ],
      achievements: [
        'Fully functional office space',
        'Optimized workflow design',
        'Professional business environment',
        'Ready for client meetings and operations'
      ],
      images: [
        '1761045604997.jpg',
        '1761045608982.jpg'
      ],
      folder: 'settingupshop',
      icon: Building
    }
  ]

  const projectStats = [
    { number: '4+', label: 'Major Projects' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24+', label: 'Months Experience' },
    { number: '50+', label: 'Team Members' }
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

  const imageVariants = {
    initial: { scale: 1.1, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' }
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
              Our Projects
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
              Showcasing Excellence in Engineering & Industrial Solutions
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
              Discover our completed projects that demonstrate our commitment to quality, safety, and professional execution across various industries.
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
              {projectStats.map((stat, index) => (
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

      {/* Projects Grid Section */}
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
              Our Portfolio
            </motion.h2>
            
            <motion.p 
              className="text-section-subheading text-center"
              style={{
                marginBottom: 'var(--mebs-spacer-4xl)',
                color: 'var(--mebs-gray-700)'
              }}
              variants={fadeInUp}
            >
              Diverse Projects Across Multiple Industries and Services
            </motion.p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--mebs-spacer-5xl)'
            }}>
              {projects.map((project, index) => {
                const ProjectIcon = project.icon
                return (
                  <motion.div
                    key={project.title}
                    variants={fadeInUp}
                    style={{
                      background: index % 2 === 0 ? 'var(--mebs-white-off)' : 'var(--mebs-white)',
                      padding: 'var(--mebs-spacer-4xl)',
                      borderRadius: 'var(--mebs-border-radius-2xl)',
                      border: 'var(--mebs-border-gold-thin)',
                      boxShadow: index % 2 === 0 ? 'var(--mebs-shadow)' : 'none'
                    }}
                  >
                    {/* Project Header */}
                    <div style={{
                      textAlign: 'center',
                      marginBottom: 'var(--mebs-spacer-3xl)'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
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
                          <ProjectIcon size={28} />
                        </div>
                        <h3 className="text-section-subheading" style={{
                          margin: 0,
                          color: 'var(--mebs-royal-gold)'
                        }}>
                          {project.title}
                        </h3>
                      </div>
                      
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 'var(--mebs-spacer-lg)',
                        marginBottom: 'var(--mebs-spacer-lg)',
                        flexWrap: 'wrap'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--mebs-spacer-xs)'
                        }}>
                          <Calendar size={18} style={{
                            color: 'var(--mebs-royal-gold)'
                          }} />
                          <span className="text-content-body text-gray-dark">
                            {project.period}
                          </span>
                        </div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--mebs-spacer-xs)'
                        }}>
                          <MapPin size={18} style={{
                            color: 'var(--mebs-royal-gold)'
                          }} />
                          <span className="text-content-body text-gray-dark">
                            {project.location}
                          </span>
                        </div>
                      </div>

                      <p className="text-content-large" style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        color: 'var(--mebs-gray-700)'
                      }}>
                        {project.description}
                      </p>
                    </div>

                    {/* Project Details Grid */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                      gap: 'var(--mebs-spacer-3xl)',
                      marginBottom: 'var(--mebs-spacer-4xl)'
                    }}>
                      {/* Services Provided */}
                      <div>
                        <h4 className="text-content-large" style={{
                          marginBottom: 'var(--mebs-spacer-lg)',
                          color: 'var(--mebs-black)',
                          fontWeight: 'var(--mebs-font-weight-semibold)'
                        }}>
                          Services Provided
                        </h4>
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 'var(--mebs-spacer-sm)'
                        }}>
                          {project.services.map((service, serviceIndex) => (
                            <div
                              key={serviceIndex}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 'var(--mebs-spacer-sm)'
                              }}
                            >
                              <CheckCircle size={18} style={{
                                color: 'var(--mebs-royal-gold)',
                                marginTop: '2px',
                                flexShrink: 0
                              }} />
                              <span className="text-content-body" style={{
                                color: 'var(--mebs-gray-700)'
                              }}>
                                {service}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div>
                        <h4 className="text-content-large" style={{
                          marginBottom: 'var(--mebs-spacer-lg)',
                          color: 'var(--mebs-black)',
                          fontWeight: 'var(--mebs-font-weight-semibold)'
                        }}>
                          Key Achievements
                        </h4>
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 'var(--mebs-spacer-sm)'
                        }}>
                          {project.achievements.map((achievement, achievementIndex) => (
                            <div
                              key={achievementIndex}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 'var(--mebs-spacer-sm)'
                              }}
                            >
                              <Award size={18} style={{
                                color: 'var(--mebs-royal-gold)',
                                marginTop: '2px',
                                flexShrink: 0
                              }} />
                              <span className="text-content-body" style={{
                                color: 'var(--mebs-gray-700)'
                              }}>
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Project Gallery */}
                    <div>
                      <h4 className="text-content-large text-center" style={{
                        marginBottom: 'var(--mebs-spacer-2xl)',
                        color: 'var(--mebs-black)',
                        fontWeight: 'var(--mebs-font-weight-semibold)'
                      }}>
                        Project Gallery
                      </h4>
                      
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: 'var(--mebs-spacer-lg)'
                      }}>
                        {project.images.map((image, imageIndex) => (
                          <motion.div
                            key={imageIndex}
                            variants={imageVariants}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            style={{
                              borderRadius: 'var(--mebs-border-radius-lg)',
                              overflow: 'hidden',
                              boxShadow: 'var(--mebs-shadow)',
                              aspectRatio: '4/3'
                            }}
                          >
                            <img 
                              src={`/src/assets/${project.folder}/${image}`}
                              alt={`${project.title} - Project image ${imageIndex + 1}`}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block'
                              }}
                            />
                          </motion.div>
                        ))}
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
              Have a Project in Mind?
            </motion.h2>
            
            <motion.p 
              className="text-content-large"
              style={{
                marginBottom: 'var(--mebs-spacer-2xl)',
                opacity: 0.9
              }}
              variants={fadeInUp}
            >
              Let's discuss how we can bring the same level of excellence to your next project.
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

export default Projects