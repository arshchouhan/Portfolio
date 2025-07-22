import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectCard = ({ 
  title, 
  description, 
  imageUrl, 
  tags = [], 
  index = 0 
}) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="relative h-60 w-full">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={title} 
            layout="fill" 
            objectFit="cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500" />
        )}
      </div>
      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold mb-2 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + index * 0.2 }}
        >
          {description}
        </motion.p>
        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.2 }}
        >
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
