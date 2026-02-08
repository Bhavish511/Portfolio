import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data';

const Footer = () => {
  const { socialLinks } = personalInfo;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="footer-logo">Bhavish.<span>dev</span></h3>
            <p className="footer-tagline">Architecting modern digital experiences with precision and passion.</p>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4>Get in Touch</h4>
            <a href={`mailto:${personalInfo.email}`} className="footer-email">
              <div className="email-icon"><FaEnvelope /></div>
              <span>{personalInfo.email}</span>
            </a>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4>Connect</h4>
            <div className="social-links-footer">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="divider-line"></div>
          <div className="footer-bottom-info">
            <p>&copy; {new Date().getFullYear()} Bhavish Kumar. All rights reserved.</p>
            <div className="footer-status">
              <span className="dot"></span> Available for projects
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

