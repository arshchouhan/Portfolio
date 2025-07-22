import { motion } from 'framer-motion';

const AnimatedHeader = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center py-20"
    >
      <motion.h1 
        className="text-6xl font-bold text-gray-800"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </motion.h1>
      <motion.h2 
        className="text-2xl text-gray-600 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {subtitle}
      </motion.h2>
    </motion.div>
  );
};

export default AnimatedHeader;
