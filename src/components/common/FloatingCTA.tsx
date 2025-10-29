import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link
            to="/contact"
            className="block bg-rofech-yellow text-rofech-black px-5 py-2.5 font-heading font-semibold uppercase text-xs tracking-wider shadow-lg hover:shadow-[0_0_30px_rgba(255,237,0,0.6)] transition-all duration-300 hover:scale-105"
          >
            Contact
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default FloatingCTA;

