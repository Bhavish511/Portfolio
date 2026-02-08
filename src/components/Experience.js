import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { experience } from '../data';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="experience-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-divider"></div>
        </motion.div>
        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${exp.type}`}
              variants={itemVariants}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <motion.div
                  className="experience-card"
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(138, 43, 226, 0.2)' }}
                >
                  <div className="experience-header">
                    <h3>{exp.title}</h3>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  <div className="experience-company">
                    <FaBriefcase className="icon" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="experience-location">
                    <FaMapMarkerAlt className="icon" />
                    <span>{exp.location}</span>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;

