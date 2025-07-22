import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

// Components
import Navbar from '../components/Navbar';
import AnimatedHeader from '../components/AnimatedHeader';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import AnimatedTimeline from '../components/AnimatedTimeline';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

import BackgroundAnimation from '../components/BackgroundAnimation';

// Data
import { 
  personalInfo, 
  projects, 
  skills, 
  experiences, 
  education,
  testimonials
} from '../data/portfolioData';


export default function Home() {
  // No scroll tracking or parallax effects

  // Smooth scroll reveal animation variants
  const scrollRevealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      <Head>
        <title>{personalInfo.name} - Portfolio</title>
        <meta name="description" content={`Personal portfolio of ${personalInfo.name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Animated Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
        {/* Cool background animations */}
        <BackgroundAnimation type="grid" className="z-0" />
        <BackgroundAnimation type="particles" className="z-0" />
        <BackgroundAnimation type="noise" className="z-0" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] z-0">
          <BackgroundAnimation type="orb" position="center" />
        </div>

        <div className="container mx-auto px-4 z-10 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-8 px-6 py-1.5 border border-cyan-500 rounded-full text-sm font-medium tracking-wider"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500">
              WELCOME TO MY PORTFOLIO
            </span>
          </motion.div>
          
          <AnimatedHeader 
            title={personalInfo.name} 
            subtitle={personalInfo.title} 
          />
          
          <motion.div
            className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a 
              href="#about" 
              className="btn-primary inline-block py-3 px-8 rounded-md shadow-lg"
            >
              Learn More
            </a>
            <a 
              href="#contact" 
              className="btn-outline inline-block py-3 px-8 rounded-md shadow-lg"
            >
              Contact Me
            </a>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-20 bg-[#080808] relative overflow-hidden">
        <BackgroundAnimation type="grid" className="opacity-30" />
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scrollRevealVariants}
          >
            <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {personalInfo.description}
              </p>
              
              <motion.div 
                className="mt-8 flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="py-2 px-4 bg-gray-100 rounded-full text-gray-700 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {personalInfo.location}
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="py-2 px-4 bg-gray-100 rounded-full text-gray-700 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {personalInfo.email}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection projects={projects} />

      {/* Skills Section */}
      <SkillsSection skills={skills} />

      {/* Experience Timeline */}
      <AnimatedTimeline items={experiences} title="Experience" />

      {/* Education Timeline */}
      <AnimatedTimeline items={education} title="Education" />

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer personalInfo={personalInfo} />
    </div>
  );
}
