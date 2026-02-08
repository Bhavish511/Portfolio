import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, stats } from '../data';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="about-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </motion.div>
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            {personalInfo.summary.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
          <motion.div className="about-stats" variants={itemVariants}>
            <div className="stat-card">
              <h3>{stats.yearsExperience}</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>{stats.projectsCompleted}</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>{stats.technologies}</h3>
              <p>Technologies</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

