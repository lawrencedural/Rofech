import { motion } from 'framer-motion';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div className="pt-24 min-h-[70vh] flex items-center">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <p className="eyebrow mb-5">Sheet Not Found</p>
          <h1 className="mb-5">404</h1>
          <p className="text-lg text-rofech-ink-soft mb-10">
            This page doesn't exist, or it's been moved. Check the address,
            or find your way from one of the pages below.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button to="/">Back to Home</Button>
            <Button to="/portfolio" variant="secondary">View Portfolio</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
