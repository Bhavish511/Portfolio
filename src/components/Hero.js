import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { FaDownload, FaEnvelope, FaCode, FaRocket, FaCheckCircle } from 'react-icons/fa';
import { personalInfo, stats } from '../data';
import { useState } from 'react';

// Profile image
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleDownloadCV = () => {
    const resumePath = `${process.env.PUBLIC_URL}/resume.pdf`;
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Bhavish_Kumar_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  staggerChildren: 0.15,
                  duration: 0.8,
                }
              }
            }}
          >
            <motion.div
              className="status-badge"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
            >
              <span className="status-dot pulse"></span>
              Open for Collaboration
            </motion.div>

            <motion.h1
              className="hero-name"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              I'm <span className="name-gradient">{personalInfo.name}</span>
            </motion.h1>

            <motion.h2
              className="hero-title"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '1rem', color: 'var(--secondary-color)', fontWeight: '700' }}
            >
              ✦ Architecting Digital Excellence
            </motion.h2>

            <motion.div
              className="hero-typed"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              style={{ fontSize: '1.5rem', fontWeight: '500' }}
            >
              <ReactTyped
                strings={personalInfo.heroTypedStrings}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </motion.div>

            <motion.div
              className="hero-buttons"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <motion.button
                className="btn btn-primary"
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Get Resume
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                onClick={handleContact}
                whileHover={{ scale: 1.05, y: -2, background: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope /> Let's Talk
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="hero-image-wrapper" style={{ transform: "translateZ(80px)" }}>
              <div className="profile-frame">
                <motion.img
                  src={imageError ? 'https://ui-avatars.com/api/?name=Bhavish+Kumar&size=400&background=8B5CF6&color=fff&bold=true' : profileImage}
                  alt={personalInfo.name}
                  className="hero-image"
                  onError={() => setImageError(true)}
                />
              </div>

              <motion.div
                className="floating-badge badge-1"
                animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="badge-icon-wrapper"><FaCheckCircle /></div>
                <div className="badge-text">
                  <span className="badge-title">Exp</span>
                  <span className="badge-val">{stats.yearsExperience}</span>
                </div>
              </motion.div>

              <motion.div
                className="floating-badge badge-2"
                animate={{ y: [0, -18, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="badge-icon-wrapper"><FaRocket /></div>
                <div className="badge-text">
                  <span className="badge-title">Live</span>
                  <span className="badge-val">{stats.projectsCompleted}</span>
                </div>
              </motion.div>

              <motion.div
                className="floating-badge badge-3"
                animate={{ y: [0, -15, 0], rotate: [0, 1, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="badge-icon-wrapper"><FaCode /></div>
                <div className="badge-text">
                  <span className="badge-title">Stack</span>
                  <span className="badge-val">{stats.technologies}</span>
                </div>
              </motion.div>

              <div className="hero-image-bg" />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 12, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="mouse"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
