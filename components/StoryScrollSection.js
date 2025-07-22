import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import Image from 'next/image';

// Animated text that reveals on scroll
const AnimatedText = ({ text, delay = 0, threshold = 0.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  
  return (
    <motion.h3
      ref={ref}
      className="text-2xl md:text-3xl font-bold mb-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.1,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h3>
  );
};

// Animated image that scales and fades in on scroll
const AnimatedImage = ({ src, alt, width, height, className, threshold = 0.2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {src ? (
        <Image 
          src={src} 
          alt={alt} 
          width={width} 
          height={height} 
          layout="responsive"
          className="rounded-lg"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg" />
      )}
    </motion.div>
  );
};

const StorySection = ({ index, title, description, imageSrc, imagePosition = 'right' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div 
      ref={ref}
      className={`min-h-screen flex flex-col justify-center py-20 ${
        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
      }`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${
          imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
        } items-center gap-12`}>
          
          {/* Text Content */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: imagePosition === 'left' ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: imagePosition === 'left' ? 50 : -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <AnimatedText text={title} delay={0.3} />
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {description.split('\\n').map((paragraph, i) => (
                <motion.p 
                  key={i}
                  className="text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 + (i * 0.1) }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <div className="w-full md:w-1/2">
            <AnimatedImage 
              src={imageSrc} 
              alt={title}
              width={600}
              height={400}
              className="shadow-xl"
              threshold={0.2}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main parallax scroll component
const StoryScrollSection = ({ storyItems = [] }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const progressSpring = useSpring(progressScale, { stiffness: 100, damping: 30 });
  
  return (
    <div ref={containerRef} className="relative">
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Intro section with parallax effect */}
      <div className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-blue-900 to-purple-900 text-white overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], ["0%", "80%"]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]),
          }}
        >
          {/* Background pattern */}
          {[...Array(30)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-white bg-opacity-10"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                borderRadius: "50%",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, Math.random() * 0.3 + 0.1, 0.1],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror"
              }}
            />
          ))}
        </motion.div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            My Journey
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Scroll to discover my story through design and development
          </motion.h2>
          
          <motion.div
            className="mt-16 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <svg className="w-10 h-10 mx-auto text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </div>
      
      {/* Story sections */}
      {storyItems.map((item, index) => (
        <StorySection
          key={index}
          index={index}
          title={item.title}
          description={item.description}
          imageSrc={item.imageSrc}
          imagePosition={index % 2 === 0 ? 'right' : 'left'}
        />
      ))}
    </div>
  );
};

export default StoryScrollSection;
