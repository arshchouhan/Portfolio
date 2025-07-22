import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const TimelineItem = ({ item, index }) => {
  const ref = useRef(null);
  
  return (
    <motion.div 
      ref={ref}
      className={`mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:text-left' : 'md:flex-row-reverse md:text-right'}`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="md:w-1/2 p-6">
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg"
          whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.span 
            className="text-sm text-blue-600 font-semibold mb-2 inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {item.period}
          </motion.span>
          <motion.h3 
            className="text-xl font-bold mb-2 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            {item.title}
          </motion.h3>
          <motion.h4 
            className="text-md font-semibold mb-3 text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            {item.company || item.school}
          </motion.h4>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            {item.description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const AnimatedTimeline = ({ items = [], title = "Experience" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <section className="py-20 relative" ref={ref}>
      <motion.div 
        className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 md:block hidden"
        style={{
          scaleY: scrollYProgress,
          transformOrigin: "top"
        }}
      />
      
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        
        <div className="relative">
          {items.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedTimeline;
