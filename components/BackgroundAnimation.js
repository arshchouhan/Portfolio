import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Modern floating geometric shapes animation
const GeometricBackground = ({ className }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => {
        const shapes = ['circle', 'square', 'triangle', 'hexagon'];
        const shape = shapes[i % shapes.length];
        const size = Math.random() * 100 + 50;
        
        return (
          <motion.div
            key={`shape-${i}`}
            className={`absolute opacity-20`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: size,
              height: size,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {shape === 'circle' && (
              <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-500/30 to-emerald-500/30 blur-sm" />
            )}
            {shape === 'square' && (
              <div className="w-full h-full bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 blur-sm transform rotate-45" />
            )}
            {shape === 'triangle' && (
              <div className="w-0 h-0 border-l-[25px] border-r-[25px] border-b-[43px] border-l-transparent border-r-transparent border-b-cyan-500/30 blur-sm" />
            )}
            {shape === 'hexagon' && (
              <div className="w-full h-full bg-gradient-to-br from-cyan-500/30 to-emerald-500/30 blur-sm" 
                   style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
            )}
          </motion.div>
        );
      })}
      
      {/* Floating dots/particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: 'blur(0.5px)',
          }}
          animate={{
            y: [0, Math.random() * -200 - 100],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 12,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
      
      {/* Connecting lines between shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 50}%`,
            width: `${Math.random() * 200 + 100}px`,
            transformOrigin: 'left center',
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.6, 0],
            rotate: [0, Math.random() * 20 - 10],
          }}
          transition={{
            duration: Math.random() * 6 + 8,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Floating particles effect
const ParticlesEffect = ({ className }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            filter: "blur(1px)",
            opacity: Math.random() * 0.5 + 0.2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -80 - 20],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [Math.random() * 0.3 + 0.2, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

// Noise texture overlay
const NoiseTexture = ({ opacity = 0.06, className }) => {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none opacity-[${opacity}] mix-blend-overlay ${className}`}
      style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        backgroundSize: "200px 200px",
      }}
    />
  );
};

// Glowing orb effect
const GlowingOrb = ({ className }) => {
  return (
    <div className={`absolute overflow-hidden pointer-events-none ${className}`}>
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-500/30 via-emerald-500/10 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

const BackgroundAnimation = ({ type = "all", className = "", position = "top-left" }) => {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0", 
    "bottom-right": "bottom-0 right-0",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };
  
  const positionClass = positionClasses[position] || "";
  
  switch(type) {
    case "geometric":
      return <GeometricBackground className={`${className} ${positionClass}`} />;
    case "grid":
      return <GeometricBackground className={`${className} ${positionClass}`} />;
    case "particles":
      return <ParticlesEffect className={`${className} ${positionClass}`} />;
    case "noise":
      return <NoiseTexture className={`${className} ${positionClass}`} />;
    case "orb":
      return <GlowingOrb className={`${className} ${positionClass}`} />;
    case "all":
    case "hero":
      return (
        <>
          <GeometricBackground className={`${className} ${positionClass}`} />
          <ParticlesEffect className={`${className} ${positionClass}`} />
          <NoiseTexture className={`${className} ${positionClass}`} />
          <GlowingOrb className={`${className} ${positionClass}`} />
        </>
      );
  }
};

export default BackgroundAnimation;
