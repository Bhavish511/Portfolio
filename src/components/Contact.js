import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaUser, FaPaperPlane, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import { personalInfo, emailConfig } from '../data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const { serviceId, templateId, publicKey } = emailConfig;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status when user starts typing again
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: personalInfo.email,
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');

      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
        </motion.div>
        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's Work Together</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="contact-socials">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="contact-card"
                whileHover={{ y: -5, background: "rgba(255,255,255,0.08)" }}
              >
                <div className="card-icon"><FaEnvelope /></div>
                <div className="card-info">
                  <span>Chat with me</span>
                  <p>{personalInfo.email}</p>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/bhavish-kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                whileHover={{ y: -5, background: "rgba(255,255,255,0.08)" }}
              >
                <div className="card-icon"><FaLinkedin /></div>
                <div className="card-info">
                  <span>LinkedIn</span>
                  <p>Professional Profile</p>
                </div>
              </motion.a>

              <motion.a
                href="https://leetcode.com/Bhavish511"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card leetcode"
                whileHover={{ y: -5, background: "rgba(255,255,255,0.08)" }}
              >
                <div className="card-icon"><SiLeetcode /></div>
                <div className="card-info">
                  <span>LeetCode</span>
                  <p>Problem Solving</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <FaUser className="form-icon" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <FaEnvelope className="form-icon" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {submitStatus === 'success' && (
              <div className="form-message success">
                ✓ Thank you! Your message has been sent successfully. I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="form-message error">
                ✗ Sorry, there was an error sending your message. Please try again or email me directly at {personalInfo.email}
              </div>
            )}
            <motion.button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.05, boxShadow: '0 10px 30px rgba(138, 43, 226, 0.4)' } : {}}
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            >
              <FaPaperPlane /> {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

